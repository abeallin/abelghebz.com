# 0008: Components are our own code, based on named sources

- **Status:** Accepted. Agreed by Abel with the design on 1 October 2026; adopts ESA decision 0007.
- **Date:** 1 October 2026
- **Decides:** where component designs and code come from.
- **Relates to:** [0003](0003-content-never-depends-on-javascript.md).

## Context

21st.dev's free plan allows two copies a day across the site, CLI and MCP, and licences vary per component (some are
"unknown" or "no-license"). Most of its carousels and marquees kept moving under reduced motion when tested.

## Decision

Every component is written here and names its source in a comment and in the README:

| Component | Based on |
|---|---|
| Hero with the two-path split | Dribbble 24892401 (Breneva) and 27050710 (Wachid) |
| Project tile with overlapping bare screens | Mobbin "Explore screens" cards |
| Facts row | Linear customer story (Ramp) |
| Experience date rail | Linear changelog; 21st.dev olewandowski1/timeline-1 |
| Screen strip and viewer | Mobbin flows; App Store captioned screenshots; Radix Dialog |
| Enquiry router | ESA 0031; 21st.dev ziegfiroyt/faq92 |

Abel's free 21st.dev copies are spent only after asking him.
