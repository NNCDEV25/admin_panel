import express from "express";
import PopupEnquiry from "../models/PopupEnquiryModel.js";

const router = express.Router();

// ✅ POST: Create new popup enquiry
router.post("/", async (req, res) => {
  try {
    const newEnquiry = new PopupEnquiry(req.body);
    await newEnquiry.save();
    res.status(201).json({ message: "Popup enquiry saved successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to save enquiry" });
  }
});

// ✅ GET: Fetch all popup enquiries
router.get("/", async (req, res) => {
  try {
    const enquiries = await PopupEnquiry.find().sort({ createdAt: -1 });
    res.status(200).json(enquiries);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch enquiries" });
  }
});

export default router;
