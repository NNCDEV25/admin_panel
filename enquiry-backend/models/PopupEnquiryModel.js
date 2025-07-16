import mongoose from "mongoose";

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
const PopupEnquiry = mongoose.model("PopupEnquiry", popupEnquirySchema, "popup_enquiries");

export default PopupEnquiry;
