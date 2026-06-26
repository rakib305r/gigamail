const express = require('express');
const multer = require('multer');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const auth = require('../middleware/auth');
const { readDB, writeDB } = require('../utils/db');
const { extractText } = require('../utils/fileParser');
const { analyzeWithAI } = require('../utils/aiAnalyzer');
const { generatePDFReport } = require('../utils/pdfReport');

const router = express.Router();

// Multer config — memory storage
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 }, // 10 MB
  fileFilter: (req, file, cb) => {
    const allowed = ['.pdf', '.docx', '.doc', '.txt'];
    const ext = path.extname(file.originalname).toLowerCase();
    if (allowed.includes(ext)) cb(null, true);
    else cb(new Error('Only PDF, DOCX, DOC, and TXT files are allowed.'));
  }
});

// POST /api/resume/analyze
router.post('/analyze', auth, upload.single('resume'), async (req, res) => {
  try {
    const { jobDescription } = req.body;

    let resumeText = '';
    if (req.file) {
      resumeText = await extractText(req.file);
    } else if (req.body.resumeText) {
      resumeText = req.body.resumeText.trim();
    } else {
      return res.status(400).json({ error: 'Please upload a file or paste resume text.' });
    }

    if (resumeText.length < 100)
      return res.status(400).json({ error: 'Resume text is too short. Please provide more content.' });

    // Call AI
    const analysis = await analyzeWithAI(resumeText, jobDescription || '');

    // Save to database
    const db = readDB('analyses');
    const record = {
      id: uuidv4(),
      userId: req.user.id,
      fileName: req.file ? req.file.originalname : 'Pasted text',
      resumeText: resumeText.substring(0, 3000), // store first 3000 chars
      jobDescription: jobDescription || '',
      analysis,
      createdAt: new Date().toISOString()
    };

    db.analyses.push(record);
    writeDB('analyses', db);

    // Update user's analysis count
    const users = readDB('users');
    const user = users.users.find(u => u.id === req.user.id);
    if (user) { user.analysisCount = (user.analysisCount || 0) + 1; writeDB('users', users); }

    res.json({ id: record.id, analysis });
  } catch (err) {
    console.error('Analyze error:', err);
    res.status(500).json({ error: err.message || 'Analysis failed.' });
  }
});

// GET /api/resume/history
router.get('/history', auth, (req, res) => {
  const db = readDB('analyses');
  const userAnalyses = db.analyses
    .filter(a => a.userId === req.user.id)
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .map(({ resumeText, ...rest }) => rest); // strip raw text from list
  res.json({ analyses: userAnalyses });
});

// GET /api/resume/:id
router.get('/:id', auth, (req, res) => {
  const db = readDB('analyses');
  const record = db.analyses.find(a => a.id === req.params.id && a.userId === req.user.id);
  if (!record) return res.status(404).json({ error: 'Analysis not found.' });
  res.json(record);
});

// DELETE /api/resume/:id
router.delete('/:id', auth, (req, res) => {
  const db = readDB('analyses');
  const idx = db.analyses.findIndex(a => a.id === req.params.id && a.userId === req.user.id);
  if (idx === -1) return res.status(404).json({ error: 'Analysis not found.' });
  db.analyses.splice(idx, 1);
  writeDB('analyses', db);
  res.json({ message: 'Deleted.' });
});

// GET /api/resume/:id/download  — returns HTML report (print-to-PDF on frontend)
router.get('/:id/download', auth, (req, res) => {
  const db = readDB('analyses');
  const record = db.analyses.find(a => a.id === req.params.id && a.userId === req.user.id);
  if (!record) return res.status(404).json({ error: 'Analysis not found.' });

  const html = generatePDFReport(record);
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Content-Disposition', `attachment; filename="resume-analysis-${record.id.slice(0,8)}.html"`);
  res.send(html);
});

module.exports = router;
