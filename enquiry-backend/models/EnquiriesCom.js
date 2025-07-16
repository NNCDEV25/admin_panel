import mongoose from 'mongoose';

const EnquiriesComSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  subject: String,
  message: String,
}, {
  collection: 'enquiriesCom',
  timestamps: true  // ✅ Automatically adds createdAt and updatedAt
});

const EnquiriesCom = mongoose.model('EnquiriesCom', EnquiriesComSchema);
export default EnquiriesCom;
