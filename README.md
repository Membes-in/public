# Membes Homepage — Frontend

The Membes marketing site: the landing page (`/`) and legal pages
(`/privacy-policy`, `/terms-and-conditions`, `/refund-policy`, `/cookie-policy`).
Built with Next.js 15 (App Router), React 19, and Tailwind CSS v4.

This is a trimmed copy of the full app containing **only** the public homepage —
the manager/business/payment product screens have been removed.

## Setup

```bash
cd homepage/frontend
cp .env.example .env.local      # set NEXT_PUBLIC_BACKEND_URL
npm install
npm run dev                     # http://localhost:3000
```

## Environment

| Var | Purpose |
|---|---|
| `NEXT_PUBLIC_BACKEND_URL` | Base URL of the homepage backend; the Contact form POSTs to `${NEXT_PUBLIC_BACKEND_URL}/manager/webpage/connect` |

## Build & deploy

```bash
npm run build
npm start
```

Deploys cleanly to **Vercel** (set `NEXT_PUBLIC_BACKEND_URL` as a project env var),
or any Node host via `npm run build && npm start`. The contact form needs the
[backend](../backend) running and reachable at `NEXT_PUBLIC_BACKEND_URL`.

## Structure

```
src/app/
  page.tsx                 landing page
  layout.tsx, globals.css  app shell + design tokens
  sections/                landing sections (hero, features, plans, contact, …)
  privacy-policy/ …        legal pages (shared LegalPage layout)
  Redux/                   store + business-data slices
src/globalComponents/      shared UI (navbar, footer, inputs, buttons, …)
src/lib/                   helpers
public/                    images & icons
```
