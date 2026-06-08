# Membes Homepage — Frontend

The Membes marketing site: the landing page (`/`) and legal pages
(`/privacy-policy`, `/terms-and-conditions`, `/refund-policy`, `/cookie-policy`).
Built with Next.js 15 (App Router), React 19, and Tailwind CSS v4.

This is a trimmed copy of the full app containing **only** the public homepage —
the manager/business/payment product screens have been removed.

## Setup

```bash
cd homepage/frontend
npm install
npm run dev                     # http://localhost:3000
```

## Build & deploy

```bash
npm run build
```

This repo now supports both common Render deployment modes:

- **Render Static Site**: `npm install && npm run build`, publish directory `out`
- **Render Web Service / other Node hosts**: `npm run build && npm start`

The public homepage is currently self-contained and does not require any
environment variables or backend APIs to render or collect enquiries. The
contact form opens the visitor's email client with a prefilled message instead
of posting to a backend endpoint.

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
