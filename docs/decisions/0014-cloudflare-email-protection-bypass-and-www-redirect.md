# 0014: Cloudflare email protection bypass and www apex redirect

- **Status:** Accepted. Follow-up to site audit on 2 October 2026.
- **Date:** 2 October 2026
- **Decides:** how email links avoid Cloudflare 404 rewriting and how www traffic routes to apex.
- **Relates to:** [0013](0013-security-headers-and-dependency-upgrades.md).

## Decision

1. **Email obfuscation bypass (`<!--email_off-->`):**
   - Cloudflare Scrape Shield rewrote `<a href="mailto:...">` into `/cdn-cgi/l/email-protection#...` which returned 404 when visited.
   - Wrapped the Email link in `Footer.jsx` and the fallback link in `EnquiryRouter.jsx` with `<!--email_off-->` and `<!--/email_off-->` via invisible `contents` containers.
   - Cloudflare edge proxy parser respects these tags, leaving the clean `mailto:` link untouched and preventing broken link generation.

2. **`www` redirect in `next.config.mjs`:**
   - Configured an automatic permanent redirect (`308`) for requests with `host: www.abelghebz.com` targeting `https://abelghebz.com/:path*`.
   - Ensures that any traffic arriving via the `www` subdomain routes cleanly to the canonical apex domain without extra server configuration.

3. **Testing:**
   - Added E2E tests in `tests/e2e/security.spec.js` asserting that the rendered HTML contains `<!--email_off-->` comments and that `Host: www.abelghebz.com` triggers the permanent redirect.
