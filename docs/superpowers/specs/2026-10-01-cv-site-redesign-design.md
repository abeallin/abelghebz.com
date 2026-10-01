# abelghebz.com redesign: Quiet CV — design spec

- **Author:** Abel Ghebrezadik, with Claude
- **Date:** 1 October 2026
- **Status:** Design approved section by section in chat on 1 October 2026; this written spec awaits Abel's review.
- **Replaces:** `2026-03-25-portfolio-redesign-design.md` (dark particle hero), which is what is live today.

## 1. Goal

One site that wins over two audiences equally:

- **Hiring managers** for lead and senior engineering roles: they should grasp level, track record and impact in about
  10 seconds and reach the CV in one click.
- **Clients for private (freelance) work:** they should find a project like theirs, see what was built and what it
  achieved, and book a call or send an enquiry in under a minute.

It must not look templated or AI-generated (Abel's standing rule: no dotted pills, glyph stars, tick-circle lists,
gradients). Its look and patterns come from named Dribbble shots, Mobbin patterns and 21st.dev components.

### What's wrong today (measured 1 October 2026)

- A full-page capture of the live site shows About, Experience and Projects **completely blank**: their content only
  appears after a scroll-triggered Framer Motion animation. Crawlers, link previews, print and anyone whose animation
  doesn't fire see nothing.
- Figures disagree: Betmate is "300,000 users" in one place and "500,000" in another (true figure: **1 million**);
  Arena starts in "2025" in one place and "Dec 2025" in another (true: **Dec 2025**).
- There is one page; a project can't be linked on its own.

## 2. Decisions taken (all by Abel, 1 October 2026, unless marked)

| # | Decision |
|---|---|
| 1 | Visual direction **A, "Quiet CV, editorial hero"**, chosen over Swiss grid (B) and Dark instrument (C) in the browser comparison. |
| 2 | **Rebuild in place:** same repo, Next 16, Tailwind 4, Railway. Framer Motion is removed. |
| 3 | **Own page per project** at `/work/[slug]`. |
| 4 | **Contact = Cal.com booking + enquiry form.** The form opens the visitor's email app (`mailto`); no email-sending service. |
| 5 | **Light theme only.** |
| 6 | **Fonts from Fontshare: Erode** (display) + **Author** (text); JetBrains Mono for dates and labels. No full stop after the name. |
| 7 | **Enquiry routing:** hiring and "something else" → `abelghebz@gmail.com`; private work → `2percentcargoltd@gmail.com`. One Cal.com calendar (abelghebz) for all calls. The Outlook address leaves the site. |
| 8 | **ESA practices adopted:** content never depends on JS (ESA 0006), e2e + WCAG 2.2 AA (0013/0014/0024), one check script + CI gating deploys (0032), SEO list + link-preview cards (0033). Decision records as in all Abel's projects. |
| 9 | ESA's review gallery, brand kit, logo rules and `[confirm]` tags are **not** carried over (they serve ESA's audience). |
| 10 | Corrected facts: **Betmate scaled to 1 million users**; **Arena started Dec 2025**. |
| 11 | 21st.dev: **no paid installs.** Components are our own code based on named sources (ESA 0007). Abel's 2 free daily copies are spent only after asking. *(Claude's proposal, agreed in Section 2.)* |

## 3. Pages

### `/` Home, in order

1. **Nav:** "Abel Ghebrezadik" left; Work, Experience, CV, Contact right. On phones a menu button opens a Radix Dialog.
2. **Hero**
   - Mono line: `Lead / Senior Software Engineer · London`.
   - Name in Erode, two lines, very large (`clamp` up to ~112px). No full stop.
   - Summary, two sentences, from the current `personal.description`, edited for length.
   - **Two-path split** in a ruled two-column row:
     *Hiring for a lead or senior role? → Experience and CV* (links `#experience`) ·
     *Have a product to build? → See the work, book a call* (links `#work`).
   - Social links (GitHub, LinkedIn, email `abelghebz@gmail.com`, phone) as a quiet text row.
3. **Selected work (`#work`)**: one tile per project: two overlapping bare screenshots on a `tile` background (no
   device frame), eyebrow (role · year), outcome headline, Client / Role / Stack facts row, link to `/work/[slug]`.
   Filter tabs (All / Mobile / Web / Backend) are built but **only render when there are 5 or more projects**; today
   there are 3.
4. **Experience (`#experience`)**: "Download CV" at the top. All seven roles as divided rows: date rail left
   (mono), then **Company** · role, one outcome line, stack in mono. Company links where they exist today.
5. **About**: photo (`/me.jpg`) and a short bio. Skills as **grouped plain text** (e.g. Languages, Cloud, Data,
   Frontend, Tools) built from today's `skillRows`; the icon wall and the `src/assets/*.png` logos go.
6. **Contact (`#contact`)**: see §5.
7. **Footer:** name, year, the same social row.

### `/work/[slug]` — `betmate`, `gpflow`, `whenwillyoumarry`

1. Breadcrumb `Work / <Project>` (mono).
2. **Outcome headline** in Erode (e.g. *A £500k-jackpot multiplayer game inside the William Hill app, scaled to 1
   million users*).
3. One-line summary.
4. **Facts row:** Client · Role · When · Live (store / site links).
5. **Screen strip:** all of the project's screenshots in one horizontally scrolling row on the `tile` band, each with a
   short caption. Phone screens at phone ratio; web screens at desktop ratio. Activating a screen opens a **screen
   viewer** (Radix Dialog): full-size image, previous/next buttons and arrow keys, Escape closes, focus returns to the
   screen that opened it. Without JS each screen is a link to the image file.
6. **The problem / What I built / The result**, each a row with an Erode label left and text right. "What I built" is a
   two-column grid of bold lead-ins.
7. **Next project** link (cycles).

Pages are statically generated (`generateStaticParams`); unknown slugs 404.

### Other

- `/assets/abel_ghebrezadik_cv.pdf` unchanged.
- `not-found` restyled in the new system.

### Content rules

- All copy lives in `src/content/` (`profile.js`, `experience.js`, `projects.js`, `skills.js`, `seo.js`), plain JS as
  today. Every page, card and test reads from it; no figure is typed twice.
- The duplicate `timeline` array is deleted; `experience` is the one list.
- **No invented facts.** Case-study problem/result text is drafted only from today's content and the CV. Anything not
  supported is written as a visible `[Your input: …]` marker. The style guard (§7) fails the build while any marker
  remains, so the site can't ship with one. Screenshot captions written by Claude from looking at the images are listed
  in the PR for Abel to confirm.

## 4. Visual system

### Colour (contrast measured against `paper`)

| Token | Value | Use | Contrast |
|---|---|---|---|
| `paper` | `#F6F4EF` | page background | — |
| `ink` | `#151515` | headings, names | 16.6:1 |
| `body` | `#3C3C3C` | paragraphs | 10.0:1 |
| `muted` | `#6A6A6A` | dates, labels | 4.9:1 — **never on `tile`** (4.3:1) |
| `tile` | `#E8E4DB` | screenshot backing, screen strip band | — |
| `rule` | `#D9D5CC` | 1px dividers | decorative |
| `accent` | `#D9461B` | link underlines, focus ring, hover states — **never text** | 3.95:1 (non-text ≥3:1 ✓) |
| `accent-ink` | `#B83A12` | eyebrow text, primary button fill (white text) | 5.2:1 / 5.75:1 |

Defined once as Tailwind 4 `@theme` tokens in `app/globals.css`.

### Type

- **Erode** 400/500: hero name, case-study headlines and section labels on case studies.
- **Author** 400/500/600: all other text. Author runs small, so the base size is 17px (body) and 19px (lead).
- **JetBrains Mono** 400 (`next/font/google`): dates, breadcrumbs, labels, stack lists. Sentence case.
- No all-caps anywhere except the literal "CV".

**Loading:** `scripts/fetch-fontshare.mjs` downloads exactly the needed Erode and Author weights (woff2, unmodified)
from Fontshare into `src/fonts/`, which is git-ignored; `next/font/local` serves them. It runs as `prebuild`, and on its own as
`npm run fonts`. Reason: the ITF Free Font License allows self-hosting but forbids passing
the files on, and this repo is public (same approach as ESA 0022). If the fetch fails, the build fails, never silently
falling back.

### Style rules (from Abel's NO-AI-TELLS, the non-XG parts)

No bullet glyphs or default list markers; no dotted pills; no tick circles; no gradients, glows or gradient text; body
copy left-aligned; one shadow level (only on floating screenshots); lists are divided rows or a two-column grid with a
bold lead-in; one focal point per screen.

### Components and their sources (named in a code comment and in the README)

| Component | Based on |
|---|---|
| `Hero` with two-path split | Dribbble 24892401 (Breneva, serif name) + 27050710 (Wachid, read.cv-style CV) |
| `ProjectTile` with overlapping bare screens | Mobbin, explore/mobile/screens cards |
| `FactsRow` | Linear customer story, linear.app/customers/ramp |
| `ExperienceList` date rail | Linear changelog + 21st.dev olewandowski1/timeline-1 |
| `ScreenStrip` with captions | Mobbin flows + App Store captioned screenshots |
| `ScreenViewer` | Radix Dialog |
| `EnquiryRouter` | ESA 0031 + 21st.dev ziegfiroyt/faq92 |
| `PullQuote` (built only when a testimonial exists) | 21st.dev ncdai/testimonial-2 |

### Motion

CSS only. Screens on tiles lift slightly on hover **and** `:focus-visible`. On case studies, screens ease in on scroll
via `animation-timeline: view()` inside `@supports (animation-timeline: view())`,
`@media (prefers-reduced-motion: no-preference)` and `min-width: 48rem`. The server HTML is always the final state.
Nothing else moves. Removed: Framer Motion, `ParticleCanvas`, `CustomCursor`.

## 5. Contact

Two columns on desktop, stacked on phones (booking first).

**Booking (left):** Cal.com inline embed of `https://cal.com/abel-ghebrezadik/15min`, loaded with Cal's embed script
only when the section nears the viewport. Fallback, always in the HTML: a "Book a 15-minute call" link to the same URL.
Abel will rename the event ("Intro call: your project"), add a description and a profile photo in Cal.com.

**Enquiry router (right):** a native `<form>`.

- *I'm…* — `<fieldset>` of radios: **Hiring for a role** · **Looking for someone to build something** · **Something
  else**.
- *I need…* — shown only for builders: **A new app or site** · **A backend or API** · **Help with an existing
  system** · **Not sure yet**.
- Fields: always Name, Email, Message. Hiring adds Company and Role. Building adds Timeline and Budget (optional).
  Fields for other answers are hidden and not sent.
- **Send** builds `mailto:` to the routed address with subject `[Hiring] <Role> at <Company>: <Name>`,
  `[Project] <Need>: <Name>` or `[Enquiry] <Name>`, and a body of every visible field.
- Routing: Hiring and Something else → `abelghebz@gmail.com`; building → `2percentcargoltd@gmail.com`.
- Without JS, the form's `action="mailto:abelghebz@gmail.com"` with `method="post" enctype="text/plain"` still sends,
  less tidily, to the default address.
- All fields have visible labels; required fields are marked in words; errors are announced (`aria-describedby`).
- A line under the button says it opens the visitor's email app.

## 6. SEO and link previews

- `src/content/seo.js` is the one list: title and description per page, canonical `https://abelghebz.com/...`.
- `app/sitemap.js`, `app/robots.js`, metadata from the list.
- Per-page Open Graph image via `next/og` (`opengraph-image.js` per route): name + outcome headline in Erode on paper.
  Font files for it are fetched by the same script.
- Home carries JSON-LD `Person` (name, job title, url, sameAs LinkedIn and GitHub).

## 7. Quality gate: `tool/check.sh` (`npm run check`)

Same steps locally and in CI:

1. `npm ci` (CI only), `npm run fonts`, `npm run lint`.
2. `npm run build` once.
3. Start the built app (`next start`) on a free port; run Playwright (Chromium) against it:
   - **Every page** (home + three case studies, listed in `tests/e2e/pages.js`): key text visible **with JavaScript
     disabled**; no console errors; no horizontal scroll at 320px and 375px; **axe at WCAG 2.2 A/AA, failing on any
     violation at any impact level**.
   - **Behaviour:** enquiry router (fields switch, hidden fields not sent, `mailto` address/subject/body exact for
     each route); screen viewer (open, arrows, Escape, focus return); Cal fallback link present and correct; phone menu
     with and without JS; reduced motion leaves nothing animating; every `/work/<slug>` linked from home resolves;
     corrected facts (1 million, Dec 2025) appear and the old ones don't.
4. **Style guard** (`scripts/style-guard.mjs`, ported from XG `tropes.py`): scans built HTML/CSS for bullet glyphs,
   `<ul>` with markers, `text-transform: uppercase`, any `linear-gradient`/`radial-gradient`,
   `text-align: center` on body copy, a full stop after the hero name, `[Your input` markers, and font families outside
   Erode/Author/JetBrains Mono. Any hit fails.
5. Exit code is the real result (no pipe swallowing it).

Each new test is watched failing before the code that passes it. Screenshots at 1440px and 375px are reviewed before
any change is called done.

## 8. Shipping

- Work happens on `feat/redesign-quiet-cv`; it merges through a **PR into `main`**.
- **CI:** `.github/workflows/check.yml` runs `tool/check.sh` on PRs and on `main`. First choice is a GitHub-hosted
  runner (the repo is public; whether Abel's Actions budget block also stops public-repo jobs is **unverified** and is
  the plan's first task). Fallback: a self-hosted runner on the Hetzner box, as ESA.
- **Deploy:** Railway already deploys `main` (live site answers with `x-railway-request-id`, behind Cloudflare). Abel
  turns on Railway "Wait for CI" in the dashboard so a red check blocks the deploy. The Railway build must run the font
  fetch (it's part of `prebuild`).
- After deploy: a read-only smoke test against `https://abelghebz.com` (pages load, key text present, CV PDF 200, OG
  images 200).
- **Decision records** `docs/decisions/0001-…` in the ESA/XG format, one per row of §2 that is a real choice (look,
  rebuild in place, no animation library, case-study pages, mailto + routing, Cal.com, light only, Fontshare fonts,
  check gate + CI), each saying who decided.

## 9. Housekeeping

- Untrack and ignore (anchored): `/.claude/settings.local.json`, `/.playwright-mcp/`, `/.superpowers/`,
  `/itsw-full.jpeg` (a 1020×6603 screenshot of another site, unused). They stay in git history; none holds secrets
  (checked 1 October 2026).
- Delete CRA leftovers: `src/App.jsx`, `src/index.css` (replaced by `app/globals.css`), the CRA `README.md`
  (replaced), `src/assets/*.png` skill logos, unused components.
- Remove dependencies: `framer-motion`, `react-icons` (social links become a text row, per the approved hero; Claude's
  ruling); add `radix-ui`.
- Replace `"lint": "next lint"` with a flat ESLint config run directly (`next lint` is deprecated, and Claude believes
  it is removed in Next 16; the plan checks).

## 10. Out of scope

Blog, analytics, dark mode, CMS, translations, testimonials (component ready, no content), an email-sending service,
paid 21st.dev components.

## 11. Open items for Abel

- Problem and result text for each case study, and confirmation of Claude's screenshot captions.
- In Cal.com: event name, description, profile photo.
- Railway "Wait for CI" toggle once CI is green.
