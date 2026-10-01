// Case-study text is drawn only from Abel's existing site content, his CV and what the screenshots show.
// Captions were written by Claude from looking at each screenshot; Abel confirms them in the PR.
export const projects = [
  {
    slug: "betmate",
    name: "Betmate",
    kind: "mobile",
    eyebrow: "Backend lead · 2025",
    headline: "A £500k-jackpot multiplayer game for a leading sports betting company, scaled to 1 million users",
    summary: "I led the backend for Final One Standing: serverless C# on AWS Lambda, event-driven through SNS and SQS, on CockroachDB.",
    facts: [
      { label: "Client", value: "Betmate" },
      { label: "Role", value: "Lead / Senior Software Engineer" },
      { label: "When", value: "Apr — Jul 2025" },
    ],
    live: [
      { label: "App Store", url: "https://apps.apple.com/gb/app/william-hill-sports-betting/id465712788" },
      { label: "Google Play", url: "https://play.google.com/store/apps/dev?id=7184499669623963795" },
    ],
    stack: ["C#", "AWS", "CockroachDB", "Dapper"],
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
    // Status, pricing and screenshots confirmed by Abel the same day. Screens show test data, not real customers.
    slug: "cabeazy",
    name: "cabeazy",
    kind: "mobile",
    eyebrow: "Own product · pre-launch",
    headline: "A ride-hailing platform for London where drivers keep 100% of every fare",
    summary:
      "Passenger and driver apps, a portal for cab offices and the Go API behind them. The marketing site is live at cabeazy.com; a closed Android beta is next.",
    facts: [
      { label: "Client", value: "Own product" },
      { label: "Role", value: "Sole developer" },
      { label: "Since", value: "Mar 2026" },
    ],
    live: [{ label: "cabeazy.com", url: "https://cabeazy.com" }],
    stack: ["Go", "PostgreSQL", "Redis", "NATS", "Stripe", "WebSockets", "React Native", "Expo", "Kotlin", "Jetpack Compose", "Next.js", "Mapbox", "Sentry", "Docker", "Railway", "Maestro"],
    screens: [
      { src: "/screenshots/cabeazy-london.jpg", caption: "cabeazy.com, launching in London", ratio: "web" },
      { src: "/screenshots/cabeazy-cab-offices.jpg", caption: "Modern dispatch for cab offices", ratio: "web" },
      { src: "/screenshots/cabeazy-operator-dashboard.jpg", caption: "Operator portal: live operations", ratio: "web" },
      { src: "/screenshots/cabeazy-portal-demo.jpg", caption: "Clickable demo of the booking queue", ratio: "web" },
      { src: "/screenshots/cabeazy-cities.jpg", caption: "Planned UK cities", ratio: "web" },
      { src: "/screenshots/cabeazy-driver-earnings.jpg", caption: "Driver earnings", ratio: "phone" },
      { src: "/screenshots/cabeazy-driver-licence.jpg", caption: "Driver's PHV licence", ratio: "phone" },
      { src: "/screenshots/cabeazy-driver-vehicle.jpg", caption: "Vehicle and documents", ratio: "phone" },
      { src: "/screenshots/cabeazy-passenger-activity.jpg", caption: "Passenger trip history", ratio: "phone" },
      { src: "/screenshots/cabeazy-passenger-account.jpg", caption: "Passenger account", ratio: "phone" },
    ],
    problem:
      "Ride-hailing apps take a commission on every fare. cabeazy charges drivers a flat £50 a month and cab offices £10 per driver per month instead, with no commission. That means running bookings, dispatch and payments for three kinds of user at once: passengers, drivers and cab offices.",
    built: [
      { lead: "Contract-first API.", text: "A Go API on PostgreSQL and Redis whose /v2 is generated from an OpenAPI spec; CI fails if the code drifts from it." },
      { lead: "Money that adds up.", text: "Signed fare quotes valid for 10 minutes, idempotency keys on booking and payouts, and settlement through a job queue where every step is safe to retry." },
      { lead: "Real time.", text: "Ride updates over WebSockets, fanned out through Redis across instances; unanswered offers are re-dispatched every 4 seconds." },
      { lead: "Apps and web.", text: "React Native apps for passengers and drivers today, with a native Kotlin Android app under way and a Swift iOS app planned; a Next.js marketing site, operator portal and admin." },
    ],
    result: "The marketing site is live at cabeazy.com. The platform is pre-launch, with a closed Android beta next.",
  },
  {
    slug: "gpflow",
    name: "GPFlow",
    kind: "web",
    eyebrow: "Contract · NHS England · 2025",
    headline: "Bulk template management for GP practices, built for NHS England",
    summary: "A Next.js and Tailwind app, shipped as an Electron desktop app and as a web app, that automates Accurx template management: load practices from a CSV, then create or delete templates across all of them at once.",
    facts: [
      { label: "Client", value: "NHS England" },
      { label: "Role", value: "Software Engineer (Contract)" },
      { label: "When", value: "Dec 2024 — Feb 2025" },
    ],
    live: [{ label: "Web app", url: "https://gpflow-prod.up.railway.app/data/" }],
    stack: ["Next.js", "Tailwind CSS", "Electron", "TypeScript", "Playwright", "SQLite", "MongoDB", "Vitest"],
    screens: [
      { src: "/screenshots/GPFlow2.png", caption: "Loading practices from a CSV", ratio: "web" },
      { src: "/screenshots/GPFlow1.png", caption: "Creating a template", ratio: "web" },
      { src: "/screenshots/GPFlow4.png", caption: "Deleting a template in bulk", ratio: "web" },
      { src: "/screenshots/GPFlow3.png", caption: "Run dashboard", ratio: "web" },
    ],
    problem:
      "GPs nationwide use Accurx, a third-party healthcare application, to send templated messages. Creating or deleting a template across many practices was manual work, practice by practice.",
    built: [
      { lead: "Desktop and web.", text: "One Next.js and Tailwind front end, packaged with Electron for the desktop and served as a web app." },
      { lead: "CSV import.", text: "Select the practices to work on from one file." },
      { lead: "Bulk operations.", text: "Create or delete a template across every selected practice." },
      { lead: "Automation.", text: "Playwright drives Accurx, with a run dashboard showing live progress." },
    ],
    result: "Template changes that took manual work at each practice became one bulk run, removing a significant amount of time and labour.",
  },
  {
    slug: "whenwillyoumarry",
    name: "whenwillyoumarry.com",
    kind: "web",
    eyebrow: "Own product",
    headline: "A wedding website builder with RSVPs, seating and guest messaging in one place",
    summary: "Couples pick a template, add their details and share one link. Behind it: RSVP and guest management, a seating chart, email and SMS broadcasts and a gift registry.",
    facts: [
      { label: "Client", value: "Own product" },
      { label: "Stack", value: "Next.js, PostgreSQL, Railway" },
    ],
    live: [{ label: "whenwillyoumarry.com", url: "https://whenwillyoumarry.com" }],
    stack: ["TypeScript", "Next.js", "Tailwind CSS", "PostgreSQL", "Drizzle", "Redis", "Stripe", "Cloudflare R2", "Railway", "Playwright", "Vitest", "Sentry"],
    screens: [
      { src: "/screenshots/WWYM1.png", caption: "Home page", ratio: "web" },
      { src: "/screenshots/WWYM2.png", caption: "Live in three steps", ratio: "web" },
      { src: "/screenshots/WWYM4.png", caption: "Visual editor with live preview", ratio: "web" },
      { src: "/screenshots/WWYM5.png", caption: "Editing the wedding details", ratio: "web" },
      { src: "/screenshots/WWYM6.png", caption: "RSVP and guest management", ratio: "web" },
      { src: "/screenshots/WWYM7.png", caption: "Drag-and-drop seating chart", ratio: "web" },
      { src: "/screenshots/WWYM8.png", caption: "Email and SMS broadcasts", ratio: "web" },
      { src: "/screenshots/WWYM3.png", caption: "Features", ratio: "web" },
    ],
    problem:
      "A wedding needs a website, an RSVP list, a seating plan and a way to reach every guest. whenwillyoumarry puts all four in one place.",
    built: [
      { lead: "Templates and editor.", text: "Customisable templates with a visual editor and live preview." },
      { lead: "Guests.", text: "RSVP tracking and a guest list." },
      { lead: "Seating.", text: "A drag-and-drop seating chart." },
      { lead: "Messaging.", text: "Email and SMS broadcasts to all guests or a filtered group through Sweego, plus a gift registry." },
    ],
    result: "Live at whenwillyoumarry.com, with a free tier to start building.",
  },
];

export const projectBySlug = (slug) => projects.find((p) => p.slug === slug);

export function nextProject(slug) {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length];
}
