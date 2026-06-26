const pdfParse = require('pdf-parse');
const mammoth = require('mammoth');
const path = require('path');

async function extractText(file) {
  const ext = path.extname(file.originalname).toLowerCase();

  if (ext === '.txt') {
    return file.buffer.toString('utf8');
  }

  if (ext === '.pdf') {
    try {
      const data = await pdfParse(file.buffer);
      return data.text || '';
    } catch (err) {
      throw new Error('Failed to parse PDF. Please make sure the file is not password-protected.');
    }
  }

  if (ext === '.docx' || ext === '.doc') {
    try {
      const result = await mammoth.extractRawText({ buffer: file.buffer });
      return result.value || '';
    } catch (err) {
      throw new Error('Failed to parse DOCX. Please try saving as .txt or copy-pasting the text.');
    }
  }

  throw new Error('Unsupported file type: ' + ext);
}

module.exports = { extractText };
