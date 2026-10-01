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
| `src/content/` | All copy: profile, experience, projects (with case-study text and captions), skills, SEO, routing |
| `src/components/` | Page sections, all server components except `ScreenGallery`, `EnquiryRouter` and `CalEmbed` |
| `src/lib/mailto.js` | Builds the routed enquiry email |
| `app/` | Routes: `/`, `/work/[slug]`, preview cards, sitemap, robots |
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
| `Hero` | Dribbble 24892401 (Elizaveta Breneva) and 27050710 (Wachid) |
| `ProjectTile` | Mobbin "Explore screens" cards |
| `FactsRow` | Linear customer story, linear.app/customers/ramp |
| `ExperienceList` | Linear changelog; 21st.dev olewandowski1/timeline-1 |
| `ScreenGallery` | Mobbin flows; App Store captioned screenshots; Radix Dialog |
| `EnquiryRouter` | ESA decision 0031; 21st.dev ziegfiroyt/faq92 |

## Open items for Abel

- Confirm the screenshot captions in `src/content/projects.js`, and the case-study problem and result text.
- GPFlow: the project page says Electron and JavaScript; the NHS England role says Python, Selenium and Tkinter. Keep
  whichever is right.
- whenwillyoumarry.com: add your role and dates if you want them in its facts row.
- Cal.com: rename the "15 min meeting" event (for example "Intro call: your project") and add a description.
- Railway: turn on "Wait for CI" once the Check workflow is green on `main`.
