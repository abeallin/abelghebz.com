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
    // From the cabeazy repo (README, AGENTS.md, docs/engineering.md, TODO.md) and the live cabeazy.com, 1 Oct 2026.
    // Status, pricing and screenshots confirmed by Abel the same day. Driver pricing moved to £5 a day (cabeazy decision 0044), confirmed 18 Nov 2026. Screens show test data, not real customers.
    slug: "cabeazy",
    name: "cabeazy",
    kind: "mobile",
    eyebrow: "Own product · pre-launch",
    role: "Founder & sole engineer",
    headline: "A ride-hailing platform for London where drivers keep 100% of every fare",
    summary:
      "Native Android (Kotlin) and iOS (SwiftUI) apps for passengers and drivers, a portal for cab offices and the Go API behind them. The marketing site is live at cabeazy.com; the apps are in testing on Google Play and TestFlight, with a closed beta for the first drivers and passengers next.",
    facts: [
      { label: "Client", value: "Own product" },
      { label: "Since", value: "Mar 2026" },
    ],
    live: [{ label: "cabeazy.com", url: "https://cabeazy.com" }],
    stack: ["Go", "PostgreSQL", "Redis", "Stripe", "WebSockets", "Kotlin", "Jetpack Compose", "Swift", "SwiftUI", "Next.js", "Mapbox", "LiveKit", "Sentry", "Docker", "Railway", "Maestro"],
    stats: [
      { value: "0%", label: "commission on fares" },
      { value: "£5", label: "a day driven, flat, for drivers" },
      { value: "3", label: "kinds of user: passengers, drivers, cab offices" },
    ],
    flow: {
      title: "A cab office's way in",
      steps: [
        { src: "/screenshots/cabeazy-london-2026-11.jpg", caption: "Find cabeazy" },
        { src: "/screenshots/cabeazy-cab-offices-2026-11.jpg", caption: "See the office offer" },
        { src: "/screenshots/cabeazy-portal-demo-2026-11.jpg", caption: "See the live board" },
        { src: "/screenshots/cabeazy-operator-dashboard.jpg", caption: "Run live operations" },
      ],
    },
    screens: [
      { src: "/screenshots/cabeazy-london-2026-11.jpg", caption: "cabeazy in London: offices and drivers can apply now", ratio: "web" },
      { src: "/screenshots/cabeazy-cab-offices-2026-11.jpg", caption: "Everything a cab office runs on, in one system", ratio: "web" },
      { src: "/screenshots/cabeazy-operator-dashboard.jpg", caption: "Operator portal: live operations", ratio: "web" },
      { src: "/screenshots/cabeazy-portal-demo-2026-11.jpg", caption: "Live board of every booking, from a demo office", ratio: "web" },
      { src: "/screenshots/cabeazy-cities-2026-11.jpg", caption: "Choose your city", ratio: "web" },
      { src: "/screenshots/cabeazy-driver-earnings.jpg", caption: "Driver earnings", ratio: "phone" },
      { src: "/screenshots/cabeazy-driver-licence.jpg", caption: "Driver's PHV licence", ratio: "phone" },
      { src: "/screenshots/cabeazy-driver-vehicle.jpg", caption: "Vehicle and documents", ratio: "phone" },
      { src: "/screenshots/cabeazy-passenger-activity.jpg", caption: "Passenger trip history", ratio: "phone" },
      { src: "/screenshots/cabeazy-passenger-account.jpg", caption: "Passenger account", ratio: "phone" },
    ],
    problem:
      "Ride-hailing apps take a commission on every fare. cabeazy charges drivers a flat £5 for each day they drive, taken from their weekly payouts, and cab offices a one-off £1,000 onboarding fee plus £2.50 per driver for each day they work for them, with no commission. That means running bookings, dispatch and payments for three kinds of user at once: passengers, drivers and cab offices.",
    built: [
      { lead: "Contract-first API.", text: "A Go API on PostgreSQL and Redis whose /v2 is generated from an OpenAPI spec; CI fails if the code drifts from it." },
      { lead: "Money that adds up.", text: "Signed fare quotes valid for 10 minutes, idempotency keys on booking and payouts, and settlement through a job queue where every step is safe to retry." },
      { lead: "Real time.", text: "Ride updates over WebSockets, fanned out through Redis across instances; unanswered offers are re-dispatched every 4 seconds." },
      { lead: "Apps and web.", text: "Native passenger and driver apps in Kotlin and Jetpack Compose on Android and SwiftUI on iOS, with in-app calls over LiveKit; a Next.js marketing site, cab-office portal and admin." },
    ],
    result: "The marketing site is live at cabeazy.com. The platform is pre-launch: the Android and iOS apps are in testing on Google Play and TestFlight, with a closed beta for the first drivers and passengers next.",
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
    eyebrow: "Own product",
    role: "Founder & full-stack engineer",
    headline: "A wedding website builder with RSVPs, seating and guest messaging in one place",
    summary: "Couples pick a template, add their details and share one link. Behind it: RSVP and guest management, a seating chart, email and SMS broadcasts and a gift registry.",
    facts: [
      { label: "Client", value: "Own product" },
      { label: "Stack", value: "Next.js, PostgreSQL, Railway" },
    ],
    live: [{ label: "whenwillyoumarry.com", url: "https://whenwillyoumarry.com" }],
    stack: ["TypeScript", "Next.js", "Tailwind CSS", "PostgreSQL", "Drizzle", "Redis", "Stripe", "Cloudflare R2", "AhaSend", "Claude API", "Railway", "Playwright", "Vitest", "Sentry"],
    flow: {
      title: "Building a wedding site",
      steps: [
        { src: "/screenshots/WWYM4.png", caption: "Design it in the editor" },
        { src: "/screenshots/WWYM5.png", caption: "Add the wedding details" },
        { src: "/screenshots/WWYM6.png", caption: "Track RSVPs" },
        { src: "/screenshots/WWYM8.png", caption: "Message guests" },
      ],
    },
    screens: [
      { src: "/screenshots/WWYM1-2026-11.png", caption: "Home page", ratio: "web" },
      { src: "/screenshots/WWYM2-2026-11.png", caption: "Live demo site in the Classic template", ratio: "web" },
      { src: "/screenshots/WWYM4.png", caption: "Visual editor with live preview", ratio: "web" },
      { src: "/screenshots/WWYM5.png", caption: "Editing the wedding details", ratio: "web" },
      { src: "/screenshots/WWYM6.png", caption: "RSVP and guest management", ratio: "web" },
      { src: "/screenshots/WWYM7.png", caption: "Drag-and-drop seating chart", ratio: "web" },
      { src: "/screenshots/WWYM8.png", caption: "Email and SMS broadcasts", ratio: "web" },
      { src: "/screenshots/WWYM3-2026-11.png", caption: "Features: editor, RSVPs and seating", ratio: "web" },
    ],
    problem:
      "A wedding needs a website, an RSVP list, a seating plan and a way to reach every guest. whenwillyoumarry puts all four in one place.",
    built: [
      { lead: "Templates and editor.", text: "Customisable templates with a visual editor and live preview." },
      { lead: "Guests.", text: "RSVP tracking and a guest list." },
      { lead: "Seating.", text: "A drag-and-drop seating chart." },
      { lead: "Messaging.", text: "Email and SMS broadcasts to all guests or a filtered group, with email through AhaSend and SMS through Sweego, plus a gift registry." },
    ],
    result: "Live at whenwillyoumarry.com: free to build, and £59 once to publish.",
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
