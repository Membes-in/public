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
```

This repo now supports both common Render deployment modes:

- **Render Static Site**: `npm install && npm run build`, publish directory `out`
- **Render Web Service / other Node hosts**: `npm run build && npm start`

For Render Static Sites, the checked-in [render.yaml](./render.yaml) will prompt
for `NEXT_PUBLIC_BACKEND_URL` during Blueprint setup and publish the generated
`out/` directory.

The contact form needs the [backend](../backend) running and reachable at
`NEXT_PUBLIC_BACKEND_URL`.

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
