# MADO Driving School

Site for OSK MADO in Kęty (Oświęcim County). Two languages: **English** (`/en`) and **Polish** (`/pl`). The header switcher is EN / PL.

Prices, intakes, instructors, and contact details live in `content/`. UI strings live in `src/i18n/ui.ts`.

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://127.0.0.1:4477](http://127.0.0.1:4477). You will be sent to `/en` or `/pl` from the browser language.

`npm run check:intakes` fails the build if there is no **open English** intake more than seven days out.

## Enrolment email

Set `RESEND_API_KEY` and `ENROL_FROM_EMAIL` on the server only. They must never be `NEXT_PUBLIC_`.

## Analytics and cookies

Cookie banner is translated. Analytics load only after accept.

Set `NEXT_PUBLIC_SITE_URL` to the live HTTPS origin so sitemap, robots.txt, and social preview images resolve correctly.

## Stack

Next.js App Router, TypeScript strict, Tailwind.
