# 0015: 30-minute booking event and updated call copy

- **Status:** Accepted. Requested by Abel on 2 October 2026 ("I changed cal to 30 mins, I'm not doing hour calls").
- **Date:** 2 October 2026
- **Decides:** booking duration, Cal.com slug, button labels, and copy.
- **Relates to:** [0005](0005-cal-com-and-mailto-enquiries.md), [0012](0012-cal-pop-up-and-versioned-cv-links.md).

## Decision

1. **Routing and Slug:**
   - Updated `CAL_LINK` in `src/content/routing.js` to `abel-ghebrezadik/30min`.
   - Pop-up modal and no-JS fallback links target `https://cal.com/abel-ghebrezadik/30min`.

2. **Copy and Labels:**
   - Booking pills updated from "Book a 15-minute call" to "Book a 30-minute call".
   - Contact card copy updated to "Pick a 30-minute slot that suits you...".
   - Home page SEO meta description updated to "...or book a 30-minute call."

3. **Testing:**
   - Updated unit tests (`tests/unit/content.test.mjs`) and E2E specs (`brand-assets.spec.js`, `contact.spec.js`, `home.spec.js`) to assert the new slug and copy.
