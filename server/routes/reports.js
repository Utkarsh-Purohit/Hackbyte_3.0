const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const Report = require("../models/Report");
const { extractText } = require("../utils/ocr");
const { analyzeReport } = require('../utils/ai');

const router = express.Router();

// File Storage Config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join(__dirname, "../../uploads");
    if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB
});

// Upload Endpoint
router.post("/upload", upload.single("report"), async (req, res) => {
  const extractedText = await extractText(req.file.path);
  report.analysis = await analyzeReport(extractedText);
  report.extractedText = extractedText;
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const report = new Report({
      patientId: req.body.patientId,
      filename: req.file.originalname,
      filePath: req.file.path,
    });

    await report.save();
    res.json({
      success: true,
      message: "File uploaded successfully",
      file: req.file,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
