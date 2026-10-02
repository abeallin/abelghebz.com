# 0017: Refined type scale and header wordmark

- **Status:** Accepted. Requested by Abel on 2 October 2026.
- **Date:** 2 October 2026
- **Decides:** typography scale refinement across body, intro summaries, client lists, and action buttons; header brand wordmark without badge.
- **Relates to:** [0007](0007-fontshare-erode-and-author.md), [0010](0010-gallery-picks.md), [0011](0011-case-study-extras-header-and-performance.md), [0016](0016-general-sans-and-monogram-header.md).

## Decision

1. **Header Brand: Clean Minimalist Layout (Nothing on the Left):**
   - Abel requested removing all elements from the left side of the header (both the badge and the wordmark).
   - The sticky header is now purely functional and right-aligned, displaying only the main navigation links (`Work`, `Experience`, `CV`, `Contact`) and the "Book a call" pill action. This keeps the top of the viewport entirely uncluttered and allows the primary hero display typography to command full focus.

2. **Refined Typography Scale:**
   - Following the switch from Author to General Sans (decision 0016), text density shifted because General Sans has a noticeably taller x-height and wider character geometry. At the previous 17px body and 19px intro sizes, the typography appeared chunky and oversized compared to current front-end design conventions (Linear, read.cv, Vercel).
   - Rebalanced the scale across the site:
     - **Base body font:** dialed down from `17px` to `16px` in `app/globals.css`, case study sections, and work summaries.
     - **Hero lead summary & About lead:** dialed down from `19px` to `17.5px leading-[1.65]` for optimal reading cadence and visual harmony beneath large display titles.
     - **Worked with row:** revised from prominent `18px font-semibold text-ink/80` to editorial `15.5px font-medium text-ink/75`, functioning as quiet credibility proof rather than shouting over the summary.
     - **Pills & action buttons:** refined from `px-5 py-3 text-[16px]` to `px-5 py-2.5 text-[14.5px] font-medium` across `pillBase`, `Block`, and contact enquiry actions, delivering sharper proportions.
     - **Form inputs:** deliberately preserved at `16px` to maintain accessibility and prevent iOS Safari auto-zoom on input focus.
     - **Brand specification:** updated `/brand` documentation to reflect the `body 16px` foundation.

3. **Arena Entertainment Experience Headline: AI Assistant Focus:**
   - Updated the primary outcome headline for Arena Entertainment to highlight the AI conversational assistant built on AWS Bedrock (`"Built an AI conversational assistant on AWS Bedrock for 200+ team members, cutting onboarding time and internal support requests across Slack and Jira."`).
   - Highlighted modern, production LLM engineering as the leading credential for recent work.
   - Preserved all performance and latency metrics (14s to 2s API latency, Snowflake and MySQL query optimizations) in the expandable detail text.
