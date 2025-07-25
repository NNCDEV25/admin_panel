import express from 'express';
import EnquiriesCom from '../models/EnquiriesCom.js';

const router = express.Router();

// GET all entries
router.get('/', async (req, res) => {
  try {
    const records = await EnquiriesCom.find();
    res.json(records);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST new entry
router.post('/', async (req, res) => {
  try {
    const newEntry = new EnquiriesCom(req.body);
    await newEntry.save();
    res.status(201).json(newEntry);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET monthly count of EnquiriesCom
router.get('/monthly-count', async (req, res) => {
  try {
    const results = await EnquiriesCom.aggregate([
      {
        $match: {
          createdAt: { $exists: true }
        }
      },
      {
        $group: {
          _id: { $month: "$createdAt" },
          count: { $sum: 1 }
        }
      },
      {
        $project: {
          monthIndex: "$_id",
          count: 1,
          _id: 0
        }
      },
      {
        $addFields: {
          month: {
            $arrayElemAt: [
              [
                "Jan", "Feb", "Mar", "Apr", "May", "Jun",
                "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
              ],
              { $subtract: ["$monthIndex", 1] }
            ]
          }
        }
      },
      {
        $project: {
          count: 1,
          month: 1
        }
      },
      {
        $sort: { monthIndex: 1 }
      }
    ]);

    res.status(200).json(results);
  } catch (err) {
    console.error("Monthly count error:", err);
    res.status(500).json({ error: "Failed to fetch monthly stats" });
  }
});

export default router;
