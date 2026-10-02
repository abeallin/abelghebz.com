# 0016: General Sans body typeface and minimal monogram header

- **Status:** Accepted. Requested by Abel on 2 October 2026.
- **Date:** 2 October 2026
- **Decides:** secondary typeface for buttons and body text, and header brand presentation.
- **Relates to:** [0007](0007-fontshare-erode-and-author.md), [0011](0011-case-study-extras-header-and-performance.md).

## Decision

1. **Header Brand Simplification:**
   - The sticky header previously had both the `[AG]` monogram badge and full name `Abel Ghebrezadik`, creating immediate visual redundancy above the large hero headline on the home page.
   - Simplified the header brand to solely the `[AG]` monogram badge, linked to `/` with an accessible `aria-label="Abel Ghebrezadik (home)"`.

2. **Typography: General Sans replaces Author:**
   - Replaced Fontshare's **Author** with **General Sans** (`400`, `500`, `600`).
   - Kept **Erode** for the name and case-study headlines, and **JetBrains Mono** for dates, labels, and stacks.
   - General Sans delivers an ultra-crisp, rationalist Swiss engineering aesthetic, providing cleaner proportions and sharper geometry on button pills and body copy.
   - Updated `scripts/fetch-fontshare.mjs` to fetch `general-sans@400,500,600`.
   - Updated `globals.css` (`--font-sans: var(--font-general-sans), system-ui, sans-serif`), Open Graph image generation (`src/lib/og.js`), and the `/brand` showcase page.
