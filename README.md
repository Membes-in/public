# Membes Homepage

A self-contained, independently deployable version of the Membes marketing
homepage, extracted from the main project. Two parts:

| Folder | What it is | Stack |
|---|---|---|
| [`frontend/`](frontend) | Landing page + legal pages (privacy, terms, refund, cookie) | Next.js 15, React 19, Tailwind v4 |
| [`backend/`](backend) | Contact-form API (`POST /manager/webpage/connect`) — emails you each enquiry | Node.js, Express, Nodemailer, MongoDB (optional) |

These are **copies** — the original `FRONTEND/` and `Backend/` apps are untouched.

## Quick start (local)

```bash
# 1. Backend
cd homepage/backend
cp .env.example .env          # fill in SMTP (+ optional DATABASE_URL)
npm install && npm run dev    # http://localhost:8080

# 2. Frontend (new terminal)
cd homepage/frontend
cp .env.example .env.local    # NEXT_PUBLIC_BACKEND_URL=http://localhost:8080
npm install && npm run dev    # http://localhost:3000
```

Open http://localhost:3000, scroll to **Contact Us**, submit — you get a
notification email and the visitor gets an auto-reply.

## Deploy

- **Frontend → Vercel** (or any Node host): set `NEXT_PUBLIC_BACKEND_URL` to the
  backend's public URL.
- **Backend → Render / Railway / Fly / VPS**: set the env vars from
  `backend/.env.example`, and set `FRONTEND_URL` to the deployed frontend origin
  (for CORS).

See each folder's README for details. Secrets live only in `.env` files (git-ignored).
