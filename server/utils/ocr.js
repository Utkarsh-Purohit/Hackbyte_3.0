const fs = require('fs');
const pdf = require('pdf-parse');
const Tesseract = require('tesseract.js');

module.exports.extractText = async (filePath) => {
  try {
    // Handle PDF files
    if (filePath.endsWith('.pdf')) {
      const dataBuffer = fs.readFileSync(filePath);
      const { text } = await pdf(dataBuffer);
      return text.trim();
    }
    // Handle images (JPG/PNG)
    else {
      const { data: { text } } = await Tesseract.recognize(
        filePath,
        'eng',
        { 
          logger: m => console.log(m.status),
          tessedit_char_whitelist: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.,:;()-/\\% '
        }
      );
      return text.trim();
    }
  } catch (err) {
    console.error('OCR Error:', err);
    throw new Error(`Failed to extract text: ${err.message}`);
  }
};