const mongoose = require('mongoose');

const ReportSchema = new mongoose.Schema({
    patientId: String,
    filename: String,
    filePath: String,
    extractedText: String,
    analysis: String,
    createdAt: { type: Date, default: Date.now }
  });