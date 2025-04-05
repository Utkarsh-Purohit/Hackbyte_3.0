const fs = require('fs');
const pdf = require('pdf-parse');
const Tesseract = require('tesseract.js');

module.exports.extractText = async (filePath) => {
  try {
    // Handle PDFs
    if (path.extname(filePath).toLowerCase() === '.pdf') {
      const dataBuffer = fs.readFileSync(filePath);
      const { text } = await pdf(dataBuffer);
      return text;
    } 
    // Handle Images
    else {
      const { data: { text } } = await Tesseract.recognize(filePath, 'eng');
      return text;
    }
  } catch (err) {
    console.error('OCR Error:', err);
    throw new Error('Failed to extract text');
  }
};