# 0004: A case-study page per project

- **Status:** Accepted, chosen by Abel on 1 October 2026.
- **Date:** 1 October 2026
- **Decides:** how projects are presented beyond the home page.
- **Relates to:** [0005](0005-cal-com-and-mailto-enquiries.md).

## Options

| Option | For | Against |
|---|---|---|
| **Own page per project — chosen** | A link to send a client; its own preview card and search entry | More to write |
| Expand in place | One page, less writing | Nothing to link to |
| Tiles only | Least work | No depth for clients |

## Decision

`/work/betmate`, `/work/gpflow` and `/work/whenwillyoumarry`, statically generated; unknown slugs are a 404. Each page:
the outcome as the headline, a facts row, a captioned strip of every screenshot with a keyboard viewer, then The
problem / What I built / The result. The layout is based on Linear's customer stories and Mobbin's flows.

Case-study text is drawn only from Abel's existing content, his CV and what the screenshots show. Claude wrote the
screenshot captions from looking at the images; Abel confirms them. The project filter tabs appear only once there are
five or more projects.
