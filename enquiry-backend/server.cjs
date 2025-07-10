const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./db');
const enquiryRoute = require('./routes/enquiryRoutes');
const enquiriesComRoute = require('./routes/enquiriesComRoutes');
const popupRoutes = require('./routes/popupRoutes');
const teamRoutes = require('./routes/teamRoutes');
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const corsOptions = {
  origin: "http://localhost:5177",
  methods: ["GET", "POST"],
  credentials: true
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// Routes
app.use('/api/enquiries', enquiryRoute);
app.use('/api/enquiriesCom', enquiriesComRoute);
app.use('/api/popup-enquiry', popupRoutes);
app.use("/api/team", teamRoutes);
// DB Connect
connectDB();

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
