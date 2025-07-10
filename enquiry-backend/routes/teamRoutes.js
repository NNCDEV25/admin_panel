const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const TeamUser = require("../models/TeamUser");

// ✅ Add new team member
router.post("/add", async (req, res) => {
  try {
    console.log("👉 Incoming team member data:", req.body);

    const newUser = new TeamUser(req.body);
    await newUser.save();

    res.status(201).json({ message: "Team member added" });
  } catch (error) {
    console.error("❌ Error adding team member:", error.message);
    res.status(500).json({ error: error.message }); // send real error
  }
});



// ✅ Count total team members
router.get("/count", async (req, res) => {
  try {
    const count = await TeamUser.countDocuments();
    res.status(200).json({ totalTeamMembers: count });
  } catch (error) {
    res.status(500).json({ error: "Failed to count team members" });
  }
});

// GET: Fetch all team members
router.get("/all", async (req, res) => {
  try {
    const members = await TeamUser.find().sort({ createdAt: -1 });
    res.status(200).json(members);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch team members" });
  }
});


// ✅ Team login route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await TeamUser.findOne({ email });
  if (!user) return res.status(404).json({ message: "User not found" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

  res.status(200).json({ message: "Login successful", user });
});

module.exports = router;
