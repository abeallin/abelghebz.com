# abelghebz.com

Abel Ghebrezadik's CV and portfolio: a home page for hiring managers and clients, and a case study per project.
Next.js 16 (App Router), React 19, Tailwind CSS 4. Deployed by Railway from `main`.

## Run it

```sh
npm ci
npm run dev        # http://localhost:5000 (fetches the fonts first time via `npm run fonts`)
```

`npm run dev` needs the fonts in `src/fonts/`; run `npm run fonts` once if they're missing. `npm run build` fetches them
itself.

## Check it

```sh
npm run check      # lint, unit tests, build, style guard, Playwright against the build
```

The same script runs in GitHub Actions on every pull request. Pull requests go into `main`; merging deploys.
To run e2e on another port, set `E2E_PORT`.

## Where things live

| Path | What |
|---|---|
| `src/content/` | All copy: profile, experience, projects (case-study text, captions, stats, flows), skills, SEO, routing, cover colours |
| `src/components/` | Page sections, all server components except `ScreenGallery`, `EnquiryRouter`, `CalPopup` and `CaseNav` |
| `src/components/ui/` | Pills and nav links (`Actions`), brand and file icons (`Icons`), technology marks (`TechIcons`, generated from simple-icons) |
| `src/gallery/`, `/gallery`, `/brand` | Hidden review pages (noindex): the design options and the brand system |
| `src/lib/mailto.js` | Builds the routed enquiry email |
| `app/` | Routes: `/`, `/work/[slug]`, `/gallery`, `/brand`, preview cards, favicon and Apple icon (AG monogram), sitemap, robots |
| `public/assets/` | The CV as PDF and Word (built from Abel's Word file; see below) |
| `scripts/fetch-fontshare.mjs` | Downloads Erode and Author into the git-ignored `src/fonts/` |
| `scripts/style-guard.mjs` | Fails on the generic-AI styling tells, input markers and stale figures |
| `docs/decisions/` | Why things are the way they are |

## Fonts and licence

Erode and Author come from [Fontshare](https://www.fontshare.com) under the ITF Free Font License, which allows
self-hosting but not passing the files on or altering them. This repo is public, so the files are fetched at build time
and never committed ([decision 0007](docs/decisions/0007-fontshare-erode-and-author.md)).

## Component sources

Every component is our own code, based on a named source ([decision 0008](docs/decisions/0008-own-code-from-named-sources.md)):

| Component | Based on |
|---|---|
| `Hero` (gallery Hero D) | Dribbble 27050710 and 27063944 (Wachid) |
| `WorkSection` (gallery Work D) | Mobbin app pages and screen cards; Dribbble 27536327 (Satz) |
| `FactsRow` | Linear customer story, linear.app/customers/ramp |
| `ExperienceList` | Linear changelog; 21st.dev olewandowski1/timeline-1 |
| `ScreenGallery` | Mobbin flows; App Store captioned screenshots; Radix Dialog |
| `EnquiryRouter` | ESA decision 0031; 21st.dev ziegfiroyt/faq92 |
| `StatStrip` | App Store stat strip |
| `FlowStrip` | Mobbin flows |
| `CaseNav` | Linear docs' "On this page" |
| `Nav`, `Footer`, contact card (gallery Buttons A) | Dribbble 27429954 (Alevtinka) and 27050710 (Wachid) |

## The CV

`public/assets/abel_ghebrezadik_cv.{pdf,docx}` are built from Abel's own Word file with a python-docx script that keeps
its styles (copies in `OneDrive/abel_ghebrezadik_cv_2026-10*`), then exported to PDF with Microsoft Word. Facts on the CV
must match `src/content/`; the name sits in the body, not the header, so ATS parsers read it.

## Open items for Abel

- Cloudflare: set Caching → Browser Cache TTL to "Respect Existing Headers" (its 4-hour default keeps old CVs on phones), and
  turn off Email Address Obfuscation (it rewrites the footer email link and injects a blocking script).
- Railway: turn on "Wait for CI" so a red check blocks a deploy.
- Cal.com: rename the "15 min meeting" event (for example "Intro call: your project") and add a description.
- GitHub: remove the old Vercel integration (its check fails on every commit with "Account is blocked").
- Confirm the screenshot captions and the case-study problem and result text in `src/content/projects.js`.
- whenwillyoumarry.com: add your role and dates if you want them in its facts row.
- Later: ESA and the Mesfney Love Foundation site, once their owners agree; a sharper portrait; a recommendation quote.
