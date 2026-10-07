# Samarth Sehdev: Portfolio

React + Vite + Tailwind CSS frontend and a FastAPI backend. Runs locally only.
All content comes from the resume and lives in `frontend/src/data/portfolio.js`.

## Structure

```
portfolio/
├── backend/
│   ├── main.py                  # FastAPI app, CORS, router registration
│   ├── routes/                  # health.py, contact.py
│   ├── schemas/contact.py       # Pydantic models
│   ├── services/contact_service.py
│   ├── data/                    # messages.jsonl is created here on first message
│   └── requirements.txt
└── frontend/
    ├── public/Samarth_Sehdev_Resume.pdf   # downloadable resume (unmodified)
    ├── src/
    │   ├── assets/samarth.jpg             # hero photograph
    │   ├── components/                    # Navbar, Footer, Reveal, SectionHeading, Icons
    │   ├── sections/                      # Hero, About, Skills, Experience, Projects,
    │   │                                  # Certifications, Education, Achievements, Contact
    │   ├── data/portfolio.js
    │   ├── api.js
    │   ├── App.jsx  main.jsx  index.css
    ├── index.html  package.json  vite.config.js
    └── tailwind.config.js  postcss.config.js
```

## Run the backend (http://localhost:8000)

```bash
cd backend
python -m venv .venv
# macOS/Linux:  source .venv/bin/activate
# Windows:      .venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

API docs: http://localhost:8000/docs · Health check: http://localhost:8000/api/health

## Run the frontend (http://localhost:5173)

```bash
cd frontend
npm install
npm run dev
```

Start the backend first so the contact form works.

## Notes

- **Contact form:** `POST /api/contact` validates input and appends it to `backend/data/messages.jsonl`. **No email is sent**; add a provider inside `services/contact_service.py` if you want that.
- **Resume / photo:** to replace them, overwrite `frontend/public/Samarth_Sehdev_Resume.pdf` and `frontend/src/assets/samarth.jpg`.
- **Project links:** the resume lists no project URLs, so cards have no View/GitHub buttons. Add `url` / `repo` fields to a project in `portfolio.js` and render buttons in `Projects.jsx` once they exist.
- **Config:** frontend API URL via `VITE_API_URL` (default `http://localhost:8000`); backend CORS origins via `CORS_ORIGINS`.
