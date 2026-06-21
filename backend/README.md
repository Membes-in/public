# Membes Homepage — Backend (Contact API)

A minimal Express service that powers the contact form on the Membes marketing
homepage. On submission it:

1. Emails an auto-reply confirmation to the visitor.
2. Emails a notification to your inbox (`CONTACT_NOTIFY_EMAIL`).
3. Logs the submission to MongoDB (optional — skipped if `DATABASE_URL` is unset).

## Endpoint

```
POST /manager/webpage/connect
Content-Type: application/json

{
  "userName":    "Jane Doe",
  "email":       "jane@example.com",
  "phoneNumber": "+91 90000 00000",
  "description": "I'd like a demo."   // optional
}
```

Returns `200 { success, message }` on success, `400` if required fields are missing.

## Setup

```bash
cd homepage/backend
cp .env.example .env      # then fill in SMTP + (optional) DATABASE_URL
npm install
npm run dev               # or: npm start
```

## Environment

See [.env.example](.env.example). Key vars:

| Var | Purpose |
|---|---|
| `PORT` | Server port (default 8080) |
| `FRONTEND_URL` | Allowed CORS origin(s), comma-separated |
| `DATABASE_URL` | MongoDB connection string (optional) |
| `SMTP_HOST/PORT/SECURE/USER/PASS` | SMTP transport |
| `MAIL_FROM` | "From" header (optional) |
| `CONTACT_NOTIFY_EMAIL` | Inbox that receives enquiries |

## Deploy

Any Node host (Render, Railway, Fly, a VPS, etc.). Set the env vars in the host's
dashboard, run `npm install` and `npm start`. Point the frontend's
`NEXT_PUBLIC_BACKEND_URL` at this service's public URL.

> Security note: credentials live only in `.env` (git-ignored). Never commit real
> SMTP passwords.
