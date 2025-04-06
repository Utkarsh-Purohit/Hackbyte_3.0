# 🩺 AI Health Assistant - Your Smart Medical Companion- MedPal

> An AI-powered web app that analyzes medical reports (MRI, cancer, diabetes, mental health) and provides personalized prescriptions, treatment plans, daily habit suggestions, and smart reminders — all in one platform.

---

## 📌 Table of Contents
- [Overview](#-overview)
- [Features](#-features)
- [How It Works](#-how-it-works)
- [Tech Stack](#-tech-stack)
- [Use Cases](#-use-cases)
- [Challenges We Faced](#-challenges-we-faced)
- [Installation](#-installation)
- [Screenshots](#-screenshots)
- [Contributors](#-contributors)
- [License](#-license)

---

## 🧠 Overview

Navigating complex medical reports can be overwhelming for patients — especially when they lack access to a second opinion. Our AI-powered web app bridges that gap. Users can upload their medical reports (PDF/image), and the AI (powered by Gemini API) generates:

- A clear explanation of the report  
- A suggested treatment/prescription plan  
- Daily lifestyle recommendations  
- Smart medication & habit reminders via a mobile-friendly dashboard  

Doctors can also view summarized insights and use the platform as a productivity-enhancing second-opinion tool.

---

## ✨ Features

### ✅ For Patients
- Upload MRI, cancer, diabetes, or mental health reports
- Receive instant AI-generated prescription suggestions
- View understandable summaries of complex terms
- Set reminders for medicine intake or therapy tasks
- Track your health with daily logs and graphs

### ✅ For Doctors
- Auto-analysis and summarization of patient reports
- Quick view of past prescriptions, reminders, and logs
- Ability to accept, edit, or reject AI suggestions
- Dashboard for managing multiple patients

---

## ⚙️ How It Works

1. **User Uploads Report (Image/PDF)**  
   ↳ OCR engine extracts text from the report  
2. **Gemini API Analyzes Report**  
   ↳ Prompts generate simplified summaries + medical suggestions  
3. **Prescriptions & Pathways Generated**  
   ↳ Based on condition type (e.g., cancer, diabetes, mental health)  
4. **Reminders Set**  
   ↳ App lets user schedule reminders for medicine or tasks  
5. **Real-Time Tracking**  
   ↳ Health stats, mood logs, sugar levels shown with charts  
6. **Doctor Dashboard (Optional)**  
   ↳ Doctors can monitor, verify, or modify outputs  

---

## 🧰 Tech Stack

**Frontend**: React, Next.js, Tailwind CSS  
**Backend**: Node.js, Express.js  
**Database**: MongoDB Atlas  
**OCR Engine**: Tesseract.js  
**AI Model**: Gemini API (Google)  
**Authentication**: Clerk/Auth.js  
**Real-time**: Socket.io  
**Deployment**: Vercel  
**Misc**: Chart.js, Cloudflare (security & performance), Turnstile

---

## 🎯 Use Cases

### 👩‍⚕️ For Doctors
- Pre-screen reports with AI suggestions  
- Manage multiple patients' summaries in one dashboard  
- Use AI as a second-opinion assistant  
- Get a time-saving consultation view  

### 👤 For Patients
- Understand your medical reports clearly  
- Get daily action plans & health guidance  
- Never forget your medication again  
- Reduce dependency on multiple healthcare apps  

---

## 🧩 Challenges We Faced

- 🧾 **OCR with inconsistent report formats**  
  ➤ Solved with image preprocessing and layout detection.  

- 🧠 **AI hallucination issues**  
  ➤ Prompt engineering and few-shot examples improved accuracy.  

- 🧪 **Handling sensitive data with care**  
  ➤ Focused on secure auth, role-based access, and local state control.

- 🧭 **UX for both patients and doctors**  
  ➤ Created role-based dashboards with custom flows.

---

