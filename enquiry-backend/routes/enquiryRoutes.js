const express = require('express');
const router = express.Router();
const Enquiry = require('../models/Enquiry');

// GET all enquiries
router.get('/', async (req, res) => {
  try {
    const enquiries = await Enquiry.find();
    res.json(enquiries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST a new enquiry
router.post('/', async (req, res) => {
  try {
    const newEnquiry = new Enquiry(req.body);
    await newEnquiry.save();
    res.status(201).json(newEnquiry);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ✅ NEW: GET monthly enquiry stats
router.get('/monthly-stats', async (req, res) => {
  try {
    const stats = await Enquiry.aggregate([
      {
        $group: {
          _id: { $month: "$createdAt" },
          count: { $sum: 1 }
        }
      },
      {
        $sort: { _id: 1 }
      }
    ]);
    res.status(200).json(stats);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
// GET: Monthly enquiry counts
router.get('/monthly-count', async (req, res) => {
  try {
    const results = await Enquiry.aggregate([
      {
        $group: {
          _id: { $month: "$createdAt" },
          count: { $sum: 1 }
        }
      },
      {
        $project: {
          month: {
            $let: {
              vars: {
                monthsInString: [
                  "", "Jan", "Feb", "Mar", "Apr", "May", "Jun",
                  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
                ]
              },
              in: { $arrayElemAt: ["$$monthsInString", "$_id"] }
            }
          },
          count: 1,
          _id: 0
        }
      },
      { $sort: { month: 1 } }
    ]);

    res.json(results);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch monthly stats" });
  }
});

module.exports = router;
