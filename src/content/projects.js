// Case-study text is drawn only from Abel's existing site content, his CV and what the screenshots show.
// Captions were written by Claude from looking at each screenshot; Abel confirms them in the PR.
const raw = [
  {
    slug: "betmate",
    name: "Betmate",
    kind: "mobile",
    eyebrow: "Backend lead · 2025",
    role: "Lead / Senior Software Engineer",
    headline: "A £500k-jackpot multiplayer game for a leading sports betting company, scaled to 1 million users",
    summary: "I led the backend for Final One Standing: serverless C# on AWS Lambda, event-driven through SNS and SQS, on CockroachDB.",
    facts: [
      { label: "Client", value: "Betmate" },
      { label: "When", value: "Apr — Jul 2025" },
    ],
    live: [
      { label: "App Store", url: "https://apps.apple.com/gb/app/william-hill-sports-betting/id465712788" },
      { label: "Google Play", url: "https://play.google.com/store/apps/dev?id=7184499669623963795" },
    ],
    stack: ["C#", "AWS", "CockroachDB", "Dapper"],
    stats: [
      { value: "1M", label: "users" },
      { value: "£500k", label: "jackpot" },
      { value: "iOS + Android", label: "inside a betting app on both stores" },
    ],
    flow: {
      title: "Playing a round",
      steps: [
        { src: "/screenshots/FOS10.jpeg", caption: "Lobby" },
        { src: "/screenshots/FOS8.jpeg", caption: "Make a round pick" },
        { src: "/screenshots/FOS7.jpeg", caption: "Check my picks" },
        { src: "/screenshots/FOS6.jpeg", caption: "League standings" },
      ],
    },
    screens: [
      { src: "/screenshots/FOS10.jpeg", caption: "Lobby", ratio: "phone" },
      { src: "/screenshots/FOS1.jpeg", caption: "How to play", ratio: "phone" },
      { src: "/screenshots/FOS8.jpeg", caption: "Making a round pick", ratio: "phone" },
      { src: "/screenshots/FOS9.jpeg", caption: "Fixtures to pick from", ratio: "phone" },
      { src: "/screenshots/FOS7.jpeg", caption: "My picks", ratio: "phone" },
      { src: "/screenshots/FOS6.jpeg", caption: "League standings", ratio: "phone" },
      { src: "/screenshots/FOS4.jpeg", caption: "Prize pools by round", ratio: "phone" },
      { src: "/screenshots/FOS5.jpeg", caption: "Settled leagues", ratio: "phone" },
      { src: "/screenshots/FOS3.jpeg", caption: "Past rounds", ratio: "phone" },
      { src: "/screenshots/FOS2.jpeg", caption: "Rounds and results", ratio: "phone" },
    ],
    problem:
      "A leading sports betting company wanted Final One Standing inside its app, built through Betmate: each round, players pick one team to win, and a wrong pick knocks them out. Outlast everyone to win the pot, with a £500k jackpot. The backend had to run every round, league and pick.",
    built: [
      { lead: "Serverless backend.", text: "High-performance C# on AWS Lambda." },
      { lead: "Event-driven.", text: "Messaging between services over SNS and SQS." },
      { lead: "Data.", text: "CockroachDB through the Dapper ORM." },
      { lead: "Delivery.", text: "CI/CD with API Gateway, Lambda and CloudFormation." },
    ],
    result: "The game scaled to 1 million users, with a £500k jackpot.",
  },
  {
    // From the cabeazy repo (README, AGENTS.md, apps/ios/README.md, src/lib/site/claims.ts) and the live cabeazy.com, 24 Nov 2026.
    // Driver pricing moved to £5 a day (cabeazy decision 0044), confirmed 18 Nov 2026. Screens show demo office data (Northside Cars), not real customers.
    slug: "cabeazy",
    name: "cabeazy",
    kind: "mobile",
    eyebrow: "Own product · pre-launch",
    role: "Founder & sole engineer",
    headline: "A private hire dispatch platform and native apps for UK cab offices, drivers and riders",
    summary:
      "Browser-based live dispatch, fleet compliance and account billing for cab offices, native Android (Kotlin) and iOS (SwiftUI) apps for passengers and drivers, and the Go API behind them. The marketing site is live at cabeazy.com; the apps are in testing on Google Play and TestFlight, with a closed beta for the first drivers and passengers next.",
    facts: [
      { label: "Client", value: "Own product" },
      { label: "Since", value: "Mar 2026" },
    ],
    live: [{ label: "cabeazy.com", url: "https://cabeazy.com" }],
    stack: ["Go", "PostgreSQL", "Redis", "Stripe", "WebSockets", "Kotlin", "Jetpack Compose", "Swift", "SwiftUI", "Next.js", "Mapbox", "LiveKit", "Sentry", "Docker", "Railway", "Maestro"],
    stats: [
      { value: "0%", label: "commission on fares" },
      { value: "£5", label: "a day driven, flat, for drivers (£2.50/driver-day for cab offices)" },
      { value: "3", label: "kinds of user: passengers, drivers, cab offices" },
    ],
    flow: {
      title: "From office booking to dispatch and billing",
      steps: [
        { src: "/screenshots/cabeazy-offices-v2.jpg", caption: "See the office platform" },
        { src: "/screenshots/cabeazy-board-v2.jpg", caption: "Run the live dispatch board" },
        { src: "/screenshots/cabeazy-booking-v2.jpg", caption: "Inspect routes and bookings" },
        { src: "/screenshots/cabeazy-statement-v2.jpg", caption: "Send month-end statements" },
      ],
    },
    screens: [
      { src: "/screenshots/cabeazy-home-v2.jpg", caption: "cabeazy.com: private hire from the office to the ride", ratio: "web" },
      { src: "/screenshots/cabeazy-offices-v2.jpg", caption: "Everything a cab office runs on, in one system", ratio: "web" },
      { src: "/screenshots/cabeazy-board-v2.jpg", caption: "Operator live board with real-time Mapbox map and driver statuses", ratio: "web" },
      { src: "/screenshots/cabeazy-booking-v2.jpg", caption: "Live booking inspector with routed London map and corporate account details", ratio: "web" },
      { src: "/screenshots/cabeazy-fleet-v2.jpg", caption: "Fleet roster with live availability, daily trips and MOT expiry tracking", ratio: "web" },
      { src: "/screenshots/cabeazy-accounts-v2.jpg", caption: "Corporate account customers with credit limits and owed balances", ratio: "web" },
      { src: "/screenshots/cabeazy-statement-v2.jpg", caption: "Month-end corporate account statement with PDF and CSV export", ratio: "web" },
      { src: "/screenshots/cabeazy-drivers-v2.jpg", caption: "Driver earnings calculator: 0% commission, £5 per day driven", ratio: "web" },
      { src: "/screenshots/cabeazy-mobile-board-v2.jpg", caption: "Mobile operator live dispatch board", ratio: "phone" },
      { src: "/screenshots/cabeazy-driver-earnings.jpg", caption: "Driver app: weekly earnings with 0% commission", ratio: "phone" },
      { src: "/screenshots/cabeazy-driver-licence.jpg", caption: "Driver app: TfL PHV licence and document compliance", ratio: "phone" },
      { src: "/screenshots/cabeazy-passenger-account.jpg", caption: "Passenger app: account, saved places and payments", ratio: "phone" },
    ],
    problem:
      "Ride-hailing apps take a commission on every fare, while legacy UK cab-office dispatch systems hide pricing behind custom quotes and lock offices into ageing desktop software. cabeazy charges drivers a flat £5 for each day they drive, taken from their weekly payouts, and cab offices a one-off £1,000 onboarding fee plus £2.50 per driver for each day they work for them, with no commission. That means running bookings, live dispatch, compliance and account billing for passengers, drivers and cab offices in one platform.",
    built: [
      { lead: "Contract-first Go API.", text: "A Go API on chi v5, sqlc and pgx v5 over PostgreSQL and Redis whose /v2 is generated from an OpenAPI spec; CI fails if the code drifts from it, and pre-deploy migrations guard every release." },
      { lead: "Money and billing that add up.", text: "Signed 10-minute fare quotes with no surge pricing, idempotency keys on bookings, tips and Stripe Connect payouts, dynamic price-book versioning, PDF/CSV corporate statements and transactional SKIP LOCKED PostgreSQL job queues." },
      { lead: "Real-time dispatch and safety.", text: "Ride updates over WebSockets fanned out through Redis across instances, in-process driver matching with 4-second re-dispatch sweeps, LiveKit + CallKit/PushKit in-app VoIP calls, SOS live tracking and automated DVLA/MOT/PHV compliance checks." },
      { lead: "Native Android, iOS and Next.js web.", text: "Native passenger and driver apps in Kotlin and Jetpack Compose on Android and Swift 6 and SwiftUI on iOS (with on-device Vision document expiry OCR and Xcode Cloud / TestFlight CI), alongside a Next.js marketing site, live Mapbox cab-office portal and admin console." },
    ],
    result: "The marketing site and interactive office demo are live at cabeazy.com. The platform is pre-launch: the Android and iOS apps are in testing on Google Play and TestFlight, with a closed beta for the first drivers and passengers next.",
  },
  {
    slug: "gpflow",
    name: "GPFlow",
    kind: "web",
    eyebrow: "Contract · NHS England · 2025",
    role: "Software Engineer (Contract)",
    headline: "Bulk template management for GP practices in North Central London, built for NHS England",
    summary: "A Next.js and Tailwind app, shipped as an Electron desktop app and as a web app, that automates Accurx template management: load practices from a CSV, then create or delete templates across all of them at once.",
    facts: [
      { label: "Client", value: "NHS England" },
      { label: "When", value: "Dec 2024 — Feb 2025" },
    ],
    live: [{ label: "Web app", url: "https://gpflow-prod.up.railway.app/data/" }],
    stack: ["Next.js", "Tailwind CSS", "Electron", "TypeScript", "Playwright", "SQLite", "MongoDB", "Vitest"],
    flow: {
      title: "A bulk change",
      steps: [
        { src: "/screenshots/GPFlow2.png", caption: "Load practices from a CSV" },
        { src: "/screenshots/GPFlow1.png", caption: "Set up the template" },
        { src: "/screenshots/GPFlow3.png", caption: "Watch the run" },
      ],
    },
    screens: [
      { src: "/screenshots/GPFlow2.png", caption: "Loading practices from a CSV", ratio: "web" },
      { src: "/screenshots/GPFlow1.png", caption: "Creating a template", ratio: "web" },
      { src: "/screenshots/GPFlow4.png", caption: "Deleting a template in bulk", ratio: "web" },
      { src: "/screenshots/GPFlow3.png", caption: "Run dashboard", ratio: "web" },
    ],
    problem:
      "GP practices use Accurx, a third-party healthcare application, to send templated messages. In North Central London (NCL), creating or deleting a template across many practices was manual work, practice by practice.",
    built: [
      { lead: "Desktop and web.", text: "One Next.js and Tailwind front end, packaged with Electron for the desktop and served as a web app." },
      { lead: "CSV import.", text: "Select the practices to work on from one file." },
      { lead: "Bulk operations.", text: "Create or delete a template across every selected practice." },
      { lead: "Automation.", text: "Playwright drives Accurx, with a run dashboard showing live progress." },
    ],
    result: "Template changes that took manual work at each practice became one bulk run: a template sweep that took 4 hours by hand now takes 4 minutes.",
  },
  {
    slug: "whenwillyoumarry",
    name: "whenwillyoumarry.com",
    kind: "web",
    eyebrow: "Own product · 2026",
    role: "Founder & full-stack engineer",
    headline: "A wedding website builder with 7 layouts, RSVPs, seating and guest messaging in one place",
    summary: "Couples pick from seven handcrafted layouts, edit with a live preview and share one link. Behind it: account-free RSVPs and dietary tracking, a drag-and-drop seating chart, 0%-fee gift links, printable flyers and email/SMS broadcasts.",
    facts: [
      { label: "Client", value: "Own product" },
      { label: "Stack", value: "Next.js, PostgreSQL, Stripe, Railway" },
    ],
    live: [{ label: "whenwillyoumarry.com", url: "https://www.whenwillyoumarry.com" }],
    stack: ["TypeScript", "Next.js", "Tailwind CSS", "shadcn/ui", "PostgreSQL", "Drizzle", "Redis", "Stripe", "Cloudflare R2", "AhaSend", "Claude API", "Railway", "Playwright", "Vitest", "Sentry"],
    stats: [
      { value: "7", label: "handcrafted layouts, switchable without losing content" },
      { value: "0%", label: "fees on cash and honeymoon gifts" },
      { value: "£59", label: "one-time to publish — free to build, no subscription" },
    ],
    flow: {
      title: "Building a wedding site",
      steps: [
        { src: "/screenshots/wwym-designs-v2.jpg", caption: "Pick a layout" },
        { src: "/screenshots/wwym-editor-v2.jpg", caption: "Customise with live preview" },
        { src: "/screenshots/wwym-rsvp-v2.jpg", caption: "Track RSVPs and meals" },
        { src: "/screenshots/wwym-broadcast-v2.jpg", caption: "Schedule guest broadcasts" },
      ],
    },
    screens: [
      { src: "/screenshots/wwym-home-v2.jpg", caption: "whenwillyoumarry.com home page", ratio: "web" },
      { src: "/screenshots/wwym-designs-v2.jpg", caption: "Seven switchable layouts photographed live on desktop and mobile", ratio: "web" },
      { src: "/screenshots/wwym-demo-garden-v2.jpg", caption: "Live Garden wedding site demo", ratio: "web" },
      { src: "/screenshots/wwym-editor-v2.jpg", caption: "Split-screen visual editor with real-time preview", ratio: "web" },
      { src: "/screenshots/wwym-rsvp-v2.jpg", caption: "RSVP and guest list with meal and dietary tracking", ratio: "web" },
      { src: "/screenshots/wwym-seating-v2.jpg", caption: "Drag-and-drop seating chart across 13 tables", ratio: "web" },
      { src: "/screenshots/wwym-broadcast-v2.jpg", caption: "Scheduled email and SMS guest broadcasts", ratio: "web" },
      { src: "/screenshots/wwym-flyers-v2.jpg", caption: "Server-rendered save-the-date and RSVP flyers in four colourways", ratio: "web" },
      { src: "/screenshots/wwym-mobile-garden-v2.jpg", caption: "Mobile wedding site: Garden layout", ratio: "phone" },
      { src: "/screenshots/wwym-mobile-editorial-v2.jpg", caption: "Mobile wedding site: Editorial layout", ratio: "phone" },
    ],
    problem:
      "Couples end up stitching together a website builder, a spreadsheet for RSVPs and meal choices, a seating chart tool, a gift registry that skims processing fees and group chats to update guests. whenwillyoumarry.com puts the entire wedding workflow in one place for a single one-time fee.",
    built: [
      { lead: "Layouts and visual editor.", text: "Seven switchable layouts (Garden, Editorial, Luxe, Modern, Magazine, Minimalist, Classic), Easy Mode guided setup, custom colours and self-hosted fonts, live split-screen preview and an AI Site Assistant powered by the Claude API." },
      { lead: "Guests, seating and weekends.", text: "Account-free guest RSVPs with meal and dietary tracking, phone contact and CSV import, a drag-and-drop seating chart, budget tracker, multi-day weekend schedules and 28 interactive video walkthroughs." },
      { lead: "Messaging, flyers and 0%-fee gifts.", text: "Scheduled email and SMS broadcasts to all guests or a filtered group, with email through AhaSend and SMS through Sweego, server-rendered save-the-date, countdown and RSVP reminder flyers with QR codes, plus direct gift links with zero platform fees." },
      { lead: "Billing, custom domains and security.", text: "One-time Stripe Checkout (£59 Standard, £99 Premium), custom domain provisioning with automated Cloudflare SSL, Google and Apple OAuth, Cloudflare R2 media uploads and Redis caching/rate limiting on Railway." },
    ],
    result: "Live at whenwillyoumarry.com: free to build and preview, £59 once to publish, with no subscriptions, no ads and 0% fees on gifts.",
  },
  {
    slug: "perfectrole",
    name: "perfectrole.app",
    kind: "web",
    eyebrow: "Own product · 2026",
    role: "Founder & sole engineer",
    headline: "A direct-to-employer job index and salary intelligence platform across 135,000+ live roles",
    summary:
      "Aggregates live roles straight from 2,500+ companies' own careers pages across North America, the UK and Europe, with pay, equity and visa details, median pay in 18 markets and role alerts.",
    facts: [
      { label: "Client", value: "Own product" },
      { label: "Stack", value: "Next.js, SQLite, Stripe, Railway" },
    ],
    live: [{ label: "perfectrole.app", url: "https://perfectrole.app" }],
    stack: ["TypeScript", "Next.js", "Tailwind CSS", "shadcn/ui", "SQLite", "Stripe", "AhaSend", "Docker", "Railway", "Playwright"],
    // Figures read from perfectrole.app and its /api/health on 18 Nov 2026 (139,394 roles, 2,509 companies).
    // The Talent Vault is parked (src/lib/vault-parked.ts redirects /talent-vault), so it is not described as live.
    stats: [
      { value: "135k+", label: "verified direct-to-employer roles" },
      { value: "2,500+", label: "company careers pages indexed" },
      { value: "18", label: "markets with median pay" },
    ],
    flow: {
      title: "From search to the employer's own site",
      steps: [
        { src: "/screenshots/perfectrole-home-2026-11.png", caption: "Filter live ATS roles" },
        { src: "/screenshots/perfectrole-command-2026-11.png", caption: "Search in the command palette" },
        { src: "/screenshots/perfectrole-insights-2026-11.png", caption: "Compare pay by market" },
        { src: "/screenshots/perfectrole-employers-2026-11.png", caption: "Employers claim their company" },
      ],
    },
    screens: [
      { src: "/screenshots/perfectrole-home-2026-11.png", caption: "perfectrole.app: 139,000+ roles from 2,500+ company careers pages", ratio: "web" },
      { src: "/screenshots/perfectrole-command-2026-11.png", caption: "Command palette search across skills, companies and roles", ratio: "web" },
      { src: "/screenshots/perfectrole-insights-2026-11.png", caption: "Weekly insights: median pay, visa sponsors and hiring velocity", ratio: "web" },
      { src: "/screenshots/perfectrole-employers-2026-11.png", caption: "Employers claim their company and pin a role free for 30 days", ratio: "web" },
      { src: "/screenshots/perfectrole-mobile-home-2026-11.png", caption: "Mobile job feed", ratio: "phone" },
      { src: "/screenshots/perfectrole-mobile-insights-2026-11.png", caption: "Mobile weekly insights", ratio: "phone" },
    ],
    problem:
      "Most job boards recycle stale listings, hide compensation and route candidates through third-party agency forms. Engineers and operators need verified links straight to the employer's own ATS, with pay, equity and visa details up front and honest benchmarks for what a role pays in their market.",
    built: [
      { lead: "Direct ATS ingestion.", text: "Concurrent ingestion pipelines indexing 135,000+ active roles across 2,500+ companies on Workday, Greenhouse, Lever, Ashby, SmartRecruiters, Workable, Personio and more into a WAL-tuned SQLite index with in-memory SWR prewarming." },
      { lead: "Pay intelligence.", text: "Median pay across 18 North American, UK and European markets in native GBP, EUR, USD and CAD, with how each job, company and tech stack pays against its market." },
      { lead: "Search and alerts.", text: "A command palette with live suggestions across skills, companies and roles, saved roles, Google and GitHub OAuth 2.0 sign-in, and role alert emails via AhaSend." },
      { lead: "Employers.", text: "Companies claim their page with a verified work email and pin a role free for 30 days; paid featured slots and Brand Hubs check out in GBP via Stripe." },
    ],
    result: "Live at perfectrole.app with 139,000+ active roles from 2,500+ company careers pages.",
  },
];

// Role lives once on each project and is slotted into the facts row right after Client.
export const projects = raw.map((p) => {
  const [client, ...rest] = p.facts;
  return { ...p, facts: [client, { label: "Role", value: p.role }, ...rest] };
});

export const projectBySlug = (slug) => projects.find((p) => p.slug === slug);

export function nextProject(slug) {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length];
}
