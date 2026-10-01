// Case-study text is drawn only from Abel's existing site content, his CV and what the screenshots show.
// Captions were written by Claude from looking at each screenshot; Abel confirms them in the PR.
export const projects = [
  {
    slug: "betmate",
    name: "Betmate",
    kind: "mobile",
    eyebrow: "Backend lead · 2025",
    headline: "A £500k-jackpot multiplayer game inside the William Hill app, scaled to 1 million users",
    summary: "I led the backend for Final One Standing: serverless C# on AWS Lambda, event-driven through SNS and SQS, on CockroachDB.",
    facts: [
      { label: "Client", value: "Betmate, for William Hill" },
      { label: "Role", value: "Lead / Senior Software Engineer" },
      { label: "When", value: "Apr — Jul 2025" },
    ],
    live: [
      { label: "App Store", url: "https://apps.apple.com/gb/app/william-hill-sports-betting/id465712788" },
      { label: "Google Play", url: "https://play.google.com/store/apps/dev?id=7184499669623963795" },
    ],
    stack: ["C#", "AWS Lambda", "CockroachDB", "Dapper", "SNS/SQS", "CloudFormation"],
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
      "William Hill wanted Final One Standing inside its app: each round, players pick one team to win, and a wrong pick knocks them out. Outlast everyone to win the pot, with a £500k jackpot. The backend had to run every round, league and pick.",
    built: [
      { lead: "Serverless backend.", text: "High-performance C# on AWS Lambda." },
      { lead: "Event-driven.", text: "Messaging between services over SNS and SQS." },
      { lead: "Data.", text: "CockroachDB through the Dapper ORM." },
      { lead: "Delivery.", text: "CI/CD with API Gateway, Lambda and CloudFormation." },
    ],
    result: "The game scaled to 1 million users inside the William Hill app, with a £500k jackpot.",
  },
  {
    slug: "gpflow",
    name: "GPFlow",
    kind: "web",
    eyebrow: "Contract · NHS England · 2025",
    headline: "Bulk template management for GP practices, built for NHS England",
    summary: "An Electron desktop app and a web app that automate Accurx template management: load practices from a CSV, then create or delete templates across all of them at once.",
    facts: [
      { label: "Client", value: "NHS England" },
      { label: "Role", value: "Software Engineer (Contract)" },
      { label: "When", value: "Dec 2024 — Feb 2025" },
    ],
    live: [{ label: "Web app", url: "https://gpflow-prod.up.railway.app/data/" }],
    stack: ["Electron", "Web", "JavaScript", "Selenium", "CSV"],
    screens: [
      { src: "/screenshots/GPFlow2.png", caption: "Loading practices from a CSV", ratio: "web" },
      { src: "/screenshots/GPFlow1.png", caption: "Creating a template", ratio: "web" },
      { src: "/screenshots/GPFlow4.png", caption: "Deleting a template in bulk", ratio: "web" },
      { src: "/screenshots/GPFlow3.png", caption: "Run dashboard", ratio: "web" },
    ],
    problem:
      "GPs nationwide use Accurx, a third-party healthcare application, to send templated messages. Creating or deleting a template across many practices was manual work, practice by practice.",
    built: [
      { lead: "Desktop and web.", text: "An Electron desktop app and a web app, each with a clean GUI over the whole process." },
      { lead: "CSV import.", text: "Select the practices to work on from one file." },
      { lead: "Bulk operations.", text: "Create or delete a template across every selected practice." },
      { lead: "Automation.", text: "Selenium drives Accurx, with a run dashboard showing progress." },
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
      { label: "Stack", value: "Next.js, PostgreSQL, AWS" },
    ],
    live: [{ label: "whenwillyoumarry.com", url: "https://whenwillyoumarry.com" }],
    stack: ["TypeScript", "Next.js", "React", "PostgreSQL", "AWS"],
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
      { lead: "Messaging.", text: "Email and SMS broadcasts to all guests or a filtered group, plus a gift registry." },
    ],
    result: "Live at whenwillyoumarry.com, with a free tier to start building.",
  },
];

export const projectBySlug = (slug) => projects.find((p) => p.slug === slug);

export function nextProject(slug) {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length];
}
