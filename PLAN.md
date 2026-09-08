# Driving School Site — Build Plan

Accepted spec. This file is the contract. Phases end in a browser check, not a compile.

## 1. Positioning

Headline promise: **Get your Polish driving licence in English.**

Everything on MADO and OSK Kasia is Polish-only. A foreigner in Oświęcim who needs Category B has no idea whether they can even follow the 30 hours of theory. That uncertainty is the conversion barrier, and it is the whole site.

Three things must be answerable in 10 seconds on a phone:

1. Can I do this in English? → Yes, stated in the H1.
2. When does the next course start? → a real date, above the fold.
3. What does it cost, all in? → price plus the honest extras.

## 2. Content model

Typed modules under `content/`. No CMS. Prices change in one file and propagate to home, pricing, and the course page.

`content/school.ts` is the rebrand file.

Domain types live in `content/types.ts`: `CategoryCode`, `Course`, `Intake`, `Instructor`, `Extra`, `Step`, `FaqItem`.

The one piece of real logic: `nextIntake(lang, now)` returns the soonest non-full future intake, or `null`. When it is `null` the hero renders "Call for the next start date" instead of a stale date.

`npm run check:intakes` fails the build if no open English intake exists more than 7 days out. Wired into `npm run build`.

## 3. Site map

| Route | Job | Primary action |
| --- | --- | --- |
| `/` | Sales scroll, answers all three questions | Enrol |
| `/courses` | Category ladder | Pick a category |
| `/courses/[slug]` | One category in full (B is the money page) | Enrol |
| `/pricing` | Every price including extras | Enrol |
| `/how-to-start` | PKK → medical → theory → practical → WORD | Enrol |
| `/instructors` | Faces + languages spoken | Call |
| `/fleet` | Cars/motorcycles, same models as WORD | — |
| `/faq` | Foreigner-specific questions | Contact |
| `/contact` | Map, hours, phones, bank | Call |
| `/enrol` | The form | Submit |
| `/privacy`, `/terms` | GDPR | — |

Gallery folds into `/fleet` and `/instructors`.

Home sections in order: hero → trust stats → next intake strip → why us → Category B teaser → price table → instructors → how-to-start condensed → FAQ (4) → map + contact → dark footer.

## 4. Stack

Next.js App Router, TypeScript strict, Tailwind, `next/font`. Static generation for marketing pages; enrol is a Server Action. No shadcn. No `output: 'export'` (that cannot host POST).

Visual: full-bleed photo hero with a dark scrim, single cyan accent on near-black/white, sticky condensing nav, diagonal section cuts via CSS `clip-path`, big numeric stats, dark footer. Display face for headings, system stack for body.

Stat counters render the real number in HTML first, then count up only if visible and `prefers-reduced-motion` is not set.

## 5. Enrol form

Posts to a Server Action. Fields: name, phone, email, category, preferred intake, language, message, consent.

Destination: Resend → school inbox + auto-reply. If `RESEND_API_KEY` is missing or send throws, the page shows the phone number and does not pretend it worked.

Non-negotiables: honeypot, 3-second minimum time-to-submit, IP rate limit, Zod at the boundary, field errors, real failure state.

## 6. Legal

- Unticked consent checkbox, purpose named, not bundled with terms.
- `/privacy`: controller (NIP/REGON), what, why, retention, rights, contact.
- Plausible only if configured — no cookie banner.
- `/terms` for the enrolment contract summary.

## 7. Phases

1. Scaffold + content + `nextIntake()` + `check:intakes`
2. Shell, nav, footer, home hero
3. `/pricing` + `/courses` + `/courses/category-b`
4. Rest of home, instructors, fleet, FAQ
5. `/enrol` + `/how-to-start` + privacy/terms
6. SEO, JSON-LD, sitemap, a11y, perf budget

## 8. Budgets (Phase 6 gates)

- LCP < 2.0s on simulated 4G. One hero image, AVIF with WebP fallback, ≤ 150 KB, priority.
- Client JS < 60 KB gzipped. Counter animation is first cut if it creeps.
- CLS < 0.05 — explicit image dimensions.
- JSON-LD: DrivingSchool, Course, FAQPage.
- Keyboard-navigable, visible focus, `prefers-reduced-motion` kills diagonal reveals and counters.
