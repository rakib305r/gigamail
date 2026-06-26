# 🤖 AI Resume Analyzer

A full-stack AI-powered resume analyzer with user authentication, job matching, skill gap analysis, dashboard, and PDF report download.

---

## ✨ Features

| Feature | Description |
|---|---|
| 📄 PDF/DOCX Upload | Upload resume files directly |
| 🤖 AI Analysis | Claude AI analyzes your resume in depth |
| 📊 Resume Score | Overall score out of 100 |
| 💡 Skill Gap Analysis | Missing skills vs job market |
| 🎯 Job Match % | Match against a job description |
| ✍️ AI Suggestions | Specific actionable rewrites |
| 📥 Download Report | Download analysis as PDF |
| 👤 User Auth | Register / Login with JWT |
| 📈 Dashboard | View all previous analyses |
| 🌙 Dark/Light Mode | Toggle theme |
| 📱 Responsive | Works on mobile & desktop |

---

## 🗂️ Project Structure

```
ai-resume-analyzer/
├── frontend/               # React app (Vite)
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page-level components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── context/        # Auth & Theme context
│   │   └── utils/          # Helper functions
│   └── package.json
├── backend/                # Node.js + Express API
│   ├── routes/             # API route handlers
│   ├── middleware/         # Auth middleware
│   ├── models/             # Data models (JSON-based)
│   ├── utils/              # PDF parser, AI caller
│   └── server.js
└── README.md
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js v18+
- An Anthropic API key → [console.anthropic.com](https://console.anthropic.com)

### 1. Clone & install

```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### 2. Configure environment

**backend/.env**
```
PORT=3001
ANTHROPIC_API_KEY=your_anthropic_key_here
JWT_SECRET=your_random_secret_here
```

**frontend/.env**
```
VITE_API_URL=http://localhost:3001
```

### 3. Run the project

```bash
# Terminal 1 — start backend
cd backend
npm start

# Terminal 2 — start frontend
cd frontend
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

---

## 🔑 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | Login, get JWT token |
| POST | `/api/resume/analyze` | Upload & analyze resume |
| GET | `/api/resume/history` | Get user's past analyses |
| GET | `/api/resume/:id` | Get single analysis |
| GET | `/api/resume/:id/download` | Download PDF report |

---

## 🛠️ Tech Stack

**Frontend:** React 18, Vite, React Router, Axios, html2pdf.js  
**Backend:** Node.js, Express, JWT, multer, pdf-parse, mammoth  
**AI:** Anthropic Claude API (claude-sonnet-4-6)  
**Storage:** JSON file-based (easily swap for MongoDB/PostgreSQL)
