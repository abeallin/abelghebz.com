// Builds the enquiry email the contact form opens. Routing decided by Abel, 1 October 2026.
import { HIRING_EMAIL, PROJECT_EMAIL } from "../content/routing.js";

export const WHO = {
  hiring: "Hiring for a role",
  project: "Looking for someone to build something",
  other: "Something else",
};

export const NEEDS = {
  new: "A new app or site",
  backend: "A backend or API",
  existing: "Help with an existing system",
  unsure: "Not sure yet",
};

const EXTRA = { hiring: ["company", "role"], project: ["need", "timeline", "budget"], other: [] };

const LABELS = { company: "Company", role: "Role", need: "Need", timeline: "Timeline", budget: "Budget" };

export const fieldsFor = (who) => EXTRA[who] ?? [];

const clean = (v) => (typeof v === "string" ? v.trim() : "");

export function buildEnquiry(state) {
  const who = EXTRA[state.who] ? state.who : "other";
  const name = clean(state.name);
  const to = who === "project" ? PROJECT_EMAIL : HIRING_EMAIL;

  const subject =
    who === "hiring"
      ? `[Hiring] ${clean(state.role)} at ${clean(state.company)}: ${name}`
      : who === "project"
        ? `[Project] ${NEEDS[state.need] ?? NEEDS.unsure}: ${name}`
        : `[Enquiry] ${name}`;

  const lines = [`I'm: ${WHO[who]}`];
  for (const key of fieldsFor(who)) {
    const value = key === "need" ? NEEDS[state.need] : clean(state[key]);
    if (value) lines.push(`${LABELS[key]}: ${value}`);
  }
  lines.push(`Name: ${name}`, `Email: ${clean(state.email)}`, "", clean(state.message));
  const body = lines.join("\n");

  const href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  return { to, subject, body, href };
}
