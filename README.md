# Membes Homepage

A self-contained, independently deployable version of the Membes marketing
homepage. Two parts:

| Folder | What it is | Stack |
|---|---|---|
| [`frontend/`](frontend) | Landing page + legal pages (privacy, terms, refund, cookie) | Next.js 15, React 19, Tailwind v4 |
| [`backend/`](backend) | Contact-form API (`POST /manager/webpage/connect`) | Node.js, Express, Nodemailer, MongoDB (optional) |

## Quick start (local)

```bash
# Backend
cd backend && cp .env.example .env && npm install && node server.js

# Frontend (new terminal)
cd frontend && cp .env.example .env && npm install && npm run dev
```

## Deploy (AWS EC2 + GitHub Actions)

See `scripts/setup-ec2.sh` for one-time server provisioning
and `.github/workflows/deploy.yml` for the CI/CD pipeline.

Required GitHub secrets: `EC2_HOST`, `EC2_USER`, `EC2_SSH_KEY`.
