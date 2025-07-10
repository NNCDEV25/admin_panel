const express = require("express");
const router = express.Router();
const PopupEnquiry = require("../models/PopupEnquiryModel");

// ✅ POST: create new popup enquiry
router.post("/", async (req, res) => {
  try {
    const newEnquiry = new PopupEnquiry(req.body);
    await newEnquiry.save();
    res.status(201).json({ message: "Popup enquiry saved successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to save enquiry" });
  }
});

// ✅ GET: fetch all popup enquiries from "popup_enquiries"
router.get("/", async (req, res) => {
  try {
    const enquiries = await PopupEnquiry.find().sort({ createdAt: -1 });
    res.status(200).json(enquiries);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch enquiries" });
  }
});

module.exports = router;
