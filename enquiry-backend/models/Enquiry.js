import mongoose from 'mongoose';

const enquirySchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  subject: String,
  message: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Enquiry = mongoose.model('Enquiry', enquirySchema);
export default Enquiry;
