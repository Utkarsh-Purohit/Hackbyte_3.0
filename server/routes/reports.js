const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const Report = require('../models/Report');
const { extractText } = require('../utils/ocr');

const router = express.Router();

// Configure file storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join(__dirname, '../../uploads');
    if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ 
  storage,
  limits: { fileSize: 10 * 1024 * 1024 } // 10MB limit
});

// Upload endpoint with text extraction
router.post('/upload', upload.single('report'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const filePath = req.file.path;

    // Extract text from the file
    const extractedText = await extractText(filePath);

    // Create and save report with extracted text
    const report = new Report({
      patientId: req.body.patientId,
      filename: req.file.originalname,
      filePath: filePath,
      extractedText: extractedText,
      fileType: req.file.mimetype,
      fileSize: req.file.size
    });

    await report.save();

    res.json({
      success: true,
      message: 'File uploaded and processed successfully',
      report: {
        id: report._id,
        filename: report.filename,
        textLength: extractedText.length,
        extractedText: extractedText
      }
    });

  } catch (err) {
    console.error('❌ Upload error:', err);

    // Clean up uploaded file if error occurred
    if (req.file && fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }

    res.status(500).json({
      success: false,
      error: err.message || 'Failed to process upload'
    });
  }
});

module.exports = router;
