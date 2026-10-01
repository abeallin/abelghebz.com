# 0005: Cal.com booking and a mailto enquiry router

- **Status:** Accepted, chosen by Abel on 1 October 2026: booking plus a form, the form opening the visitor's email
  app, the routing addresses, and one calendar for every call. Placing the booking full width above the form was
  Claude's ruling during the build.
- **Date:** 1 October 2026
- **Decides:** how visitors get in touch, and where each enquiry goes.
- **Relates to:** [0003](0003-content-never-depends-on-javascript.md); ESA decision 0031 (the router idea).

## Options

| Option | For | Against |
|---|---|---|
| **Booking + form — chosen** | One route for those ready to talk, one for those who'd rather write | Two things on the page |
| Booking link only | No form | Hiring managers often want to write first |
| Form only / email only | Simplest | No quick call for clients |

| Sending | For | Against |
|---|---|---|
| **`mailto` — chosen** | No account, no server code, nothing to keep secret | Needs an email app on the visitor's device |
| SMTP via Sweego, or Resend | Real submissions | An account, DNS and secrets for a personal site |

## Decision

1. Cal.com's `abel-ghebrezadik/15min` event, embedded inline once the section nears the viewport, with a plain link to
   it always in the HTML. Every call lands in the abelghebz calendar.
2. **I'm…** hiring for a role / looking for someone to build something / something else. **I need…** shows only for
   builders. Only the chosen route's fields are shown and sent.
3. Hiring and "something else" go to `abelghebz@gmail.com`; private work goes to `2percentcargoltd@gmail.com`.
   The Outlook address leaves the site.
4. Without JavaScript the form posts to `abelghebz@gmail.com` as `text/plain`.
5. At half width Cal.com falls back to a single column about 1,500px tall, so it runs full width with its three-pane
   layout and the form sits below.
