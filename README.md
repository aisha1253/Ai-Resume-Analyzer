# 🎯 AI Resume Skill Analyzer

> Paste your resume + job description — Gemini AI calculates your match score, finds missing skills, and suggests improvements.

---

## 🏗️ Architecture

```
┌──────────────────────────────────────────────────────────────────┐
│                         User (Browser)                           │
└───────────────────────────────┬──────────────────────────────────┘
                                │
┌───────────────────────────────▼──────────────────────────────────┐
│              Next.js App  (React + API Routes)                   │
│              Single codebase — frontend + backend                │
│                                                                  │
│   ┌──────────────────────────┐      ┌────────────────────────┐   │
│   │    Frontend  (React)     │      │  Backend (API Routes)  │   │
│   │                          │      │                        │   │
│   │  app/page.tsx            │─────▶│  app/api/analyze/      │   │
│   │  components/             │fetch │    route.ts            │   │
│   │   ├─ ResumeForm          │      │                        │   │
│   │   ├─ ScoreCard           │      │  lib/gemini.ts         │   │
│   │   └─ SkillBadge          │      │  lib/validation.ts     │   │
│   │  hooks/useAnalyze.ts     │◀─────│  lib/types.ts          │   │
│   │  Tailwind CSS            │ JSON │  .env.local (secret)   │   │
│   └──────────────────────────┘      └───────────┬────────────┘   │
│                                                 │                │
└─────────────────────────────────────────────────│────────────────┘
                                                  │ HTTPS
                                ┌─────────────────▼──────────────┐
                                │       Google Gemini API        │
                                │      gemini-1.5-flash          │
                                └────────────────────────────────┘
```

---

## ✨ Features

- **Match Score** — AI calculates 0–100% compatibility between resume and job
- **Matched Skills** — highlights skills you already have (green badges)
- **Missing Skills** — shows what the job needs that you lack (red badges)
- **AI Suggestions** — 3 actionable tips to improve your resume
- **Experience Level** — detects Junior / Mid / Senior from your resume
- **Input Validation** — Zod validates all inputs before hitting the AI
- **Error Handling** — loading states, API errors, and empty input all handled
- **Fully typed** — TypeScript throughout frontend and backend

---

## ⚙️ Tech Stack

| Layer      | Technology               |
|------------|--------------------------|
| Framework  | Next.js 14 (App Router)  |
| Language   | TypeScript               |
| Styling    | Tailwind CSS             |
| AI Model   | Google Gemini API        |
| Validation | Zod                      |
| Icons      | Lucide React             |
| Testing    | Jest + Testing Library   |
| Deploy     | Vercel (free)            |

---

## 🔄 How It Works

```
1. User pastes resume text + job description
          │
          ▼
2. Frontend sends POST /api/analyze
          │
          ▼
3. Zod validates input (length, empty check)
          │
          ▼
4. lib/gemini.ts sends structured prompt to Gemini API
          │
          ▼
5. Gemini returns JSON:
   {
     matchScore: 74,
     matchedSkills: ["React", "TypeScript"],
     missingSkills: ["AWS", "Docker"],
     suggestions: ["Get AWS certified", ...],
     experienceLevel: "Mid"
   }
          │
          ▼
6. Frontend renders:
   ├─ ScoreCard  →  74% (yellow bar)
   ├─ Green badges  →  matched skills
   ├─ Red badges    →  missing skills
   └─ Numbered list →  suggestions
```

---

## 🚀 Quick Start

```bash
# 1. Clone
git clone https://github.com/your-username/resume-analyzer.git
cd resume-analyzer

# 2. Install
npm install

# 3. Add Gemini API key
cp .env.example .env.local
# Edit .env.local → add your GEMINI_API_KEY
# Get free key at: https://aistudio.google.com

# 4. Run
npm run dev
# Open http://localhost:3000
```

---

## 📁 Folder Structure

```
resume-analyzer/
├── app/
│   ├── page.tsx                 ← Main UI
│   ├── layout.tsx               ← Root layout
│   └── api/analyze/
│       └── route.ts             ← POST endpoint
├── components/
│   ├── ResumeForm.tsx
│   ├── ScoreCard.tsx
│   ├── SkillBadge.tsx
│   └── LoadingSpinner.tsx
├── lib/
│   ├── gemini.ts                ← Gemini API call
│   ├── validation.ts            ← Zod schemas
│   └── types.ts                 ← TypeScript types
├── hooks/
│   └── useAnalyze.ts            ← Custom hook
├── __tests__/                   ← Jest tests
├── .env.local                   ← Secret (never commit)
└── .env.example                 ← Safe to commit
```

---

## 📄 License

MIT — free to use and modify.