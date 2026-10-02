# 0013: HTTP security headers and dependency vulnerability remediation

- **Status:** Accepted. Audit requested by Abel on 2 October 2026.
- **Date:** 2 October 2026
- **Decides:** production security headers, server banner suppression, and production dependency versions.
- **Relates to:** [0009](0009-check-gate-and-ci.md), [0012](0012-cal-pop-up-and-versioned-cv-links.md).

## Decision

1. **Dependency upgrades:**
   - Upgraded `next` to `^16.3.8` (remediating critical advisories GHSA-q4gf-8mx6-v5v3, GHSA-8h8q-6873-q5fj DoS in Server Components, and middleware/proxy bypasses).
   - Upgraded `postcss` to `^8.5.23` and `sharp` to `^0.35.5` (remediating inherited libvips/libheif flaws and CSS stringify XSS).
   - Resolved all high/moderate transitive issues (`nanoid`, `browserslist`, `baseline-browser-mapping`).
   - `npm audit` reports 0 vulnerabilities.

2. **Security headers (in `next.config.mjs` for all routes `/:path*`):**
   - `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload` (enforces HTTPS and enables HSTS preload).
   - `X-Frame-Options: SAMEORIGIN` (prevents clickjacking by blocking unauthorized framing).
   - `X-Content-Type-Options: nosniff` (prevents MIME type sniffing).
   - `Referrer-Policy: strict-origin-when-cross-origin` (protects referrer privacy across origins).
   - `Permissions-Policy: camera=(), microphone=(), geolocation=()` (disables unused device APIs).

3. **Banner suppression:**
   - Set `poweredByHeader: false` in `next.config.mjs` to eliminate the `X-Powered-By: Next.js` fingerprint.

4. **Testing:**
   - Added E2E assertions in `tests/e2e/security.spec.js` checking that security headers are delivered and `x-powered-by` is suppressed across both root and dynamic case study routes.
