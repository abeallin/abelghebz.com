# 0007: Erode and Author from Fontshare, fetched at build time

- **Status:** Accepted. Fontshare as the source and the Erode + Author pair were chosen by Abel on 1 October 2026 from
  four pairs shown side by side. Fetching at build time is Claude's implementation of the licence, as in ESA 0022.
- **Date:** 1 October 2026
- **Decides:** the typefaces and how they're loaded.
- **Relates to:** [0001](0001-quiet-cv-direction.md).

## Options

Four Fontshare pairs, none reused from ESA: Gambetta + Synonym, Boska + Supreme, **Erode + Author (chosen)**, Bespoke
Serif + Ranade.

## Decision

1. **Erode** for the name, case-study headlines and preview cards; **Author** for all other text (body 17px, because
   it runs small); **JetBrains Mono** (Google, via `next/font`) for dates and labels.
2. The ITF Free Font License allows self-hosting but forbids passing the files on or altering them, and this repo is
   public. `scripts/fetch-fontshare.mjs` runs before every build and saves the unmodified woff2 and woff files into
   `src/fonts/`, which git ignores. The build fails if the fetch fails.
3. The woff copies exist only for `next/og`, which can't read woff2.
