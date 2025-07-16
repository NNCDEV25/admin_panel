// server.js (converted to ES Modules)
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './db.js';
import enquiryRoute from './routes/enquiryRoutes.js';
import enquiriesComRoute from './routes/enquiriesComRoutes.js';
import popupRoutes from './routes/popupRoutes.js';
import teamRoutes from './routes/teamRoutes.js';
import blogRoutes from './routes/blogRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const whitelist = [
  "http://localhost:5173",
  "http://localhost:5134" // Add as many as needed
];
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.includes(origin)) {
      callback(null, true); // Allow the request
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST"],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

app.use('/api/enquiries', enquiryRoute);
app.use('/api/enquiriesCom', enquiriesComRoute);
app.use('/api/popup-enquiry', popupRoutes);
app.use("/api/team", teamRoutes);
app.use("/api/blogs", blogRoutes);

connectDB();

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
