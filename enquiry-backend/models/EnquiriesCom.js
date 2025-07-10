const mongoose = require('mongoose');

const EnquiriesComSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  subject: String,
  message: String
}, {
  collection: 'enquiriesCom',
  timestamps: true  // 👈 This adds createdAt and updatedAt
});

module.exports = mongoose.model('EnquiriesCom', EnquiriesComSchema);
