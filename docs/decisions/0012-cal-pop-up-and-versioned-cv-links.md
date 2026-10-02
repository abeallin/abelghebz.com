# 0012: Cal.com as a pop-up, and versioned CV links

- **Status:** Accepted. The pop-up was chosen by Abel on 2 October 2026 ("it seems overbloated"); the versioned links
  are Claude's fix for his report that his phone kept showing an old CV.
- **Date:** 2 October 2026
- **Decides:** how booking is presented, and how the site links to the CV.
- **Relates to:** [0005](0005-cal-com-and-mailto-enquiries.md) (replaces its inline embed),
  [0011](0011-case-study-extras-header-and-performance.md).

## Booking

| Option | For | Against |
|---|---|---|
| **Pop-up from the pills — chosen** | No calendar on the page; nothing from Cal.com loads until someone clicks | One click more than an inline calendar |
| Slim inline calendar | Times visible straight away | Still the largest block on the page |
| Plain link | No embed at all | Visitors leave the site to book |

Every booking pill (header, hero, contact card, each case study) is a link to `cal.com/abel-ghebrezadik/15min` marked
`data-cal-link`. `CalPopup` intercepts the click, loads Cal's embed script on first use and opens the overlay in Abel's
ink. Without JavaScript the link opens the Cal.com page.

## CV links

The CV keeps its stable address for links elsewhere, and the site serves it with `max-age=0, must-revalidate`. But
Cloudflare's default Browser Cache TTL (4 hours) overrides that, so phones kept an old copy. Every link on the site now
carries `?v=` plus the first 10 characters of the file's SHA-1, computed in `next.config.mjs` at build: a changed CV is
a new link. Links outside the site still use the plain address, which updates once Cloudflare's Browser Cache TTL is
set to "Respect Existing Headers".

## Images: WebP, not AVIF

AVIF (added in 0011) encoded 2-3x slower than WebP on first request and saved only 7-20% (measured locally: 0.81s vs
0.30s for one phone screenshot). On CI's small runner that queued page loads past the 30s test timeout, and the first
visitor to each image after a deploy waits for the same encode. Images are served as WebP only.
