const mongoose = require('mongoose');

const ReportSchema = new mongoose.Schema({
  patientId: {
    type: String,
    required: true
  },
  filename: {
    type: String,
    required: true
  },
  filePath: { 
    type: String,
    required: true
  },
  extractedText: {
    type: String,
    required: true
  },
  fileType: {
    type: String,
    required: true
  },
  fileSize: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Add text index for search functionality
ReportSchema.index({ extractedText: 'text' });

module.exports = mongoose.model('Report', ReportSchema);