const mongoose = require("mongoose");

const popupEnquirySchema = new mongoose.Schema({
  user_name: String,
  user_email: String,
  user_phone: String,
  user_service: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// 👇 Explicitly use "popup_enquiries" as collection name
module.exports = mongoose.model("PopupEnquiry", popupEnquirySchema, "popup_enquiries");
