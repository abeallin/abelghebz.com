import { HIRING_EMAIL } from "./routing.js";

export const profile = {
  name: "Abel Ghebrezadik",
  role: "Lead / Senior Software Engineer",
  location: "London",
  summary:
    "Ten years building backends and products across finance, property, health and gambling. I lead greenfield builds, clear out legacy tech debt and ship systems that scale.",
  background: "Self-taught developer with a Mathematics degree.",
  cvPath: "/assets/abel_ghebrezadik_cv.pdf",
  photo: "/me.jpg",
  email: HIRING_EMAIL,
  phone: { label: "+44 7527 841324", url: "tel:+447527841324" },
  social: [
    { label: "GitHub", url: "https://github.com/abeallin" },
    { label: "LinkedIn", url: "https://linkedin.com/in/abel-ghebrezadik" },
  ],
};

export const paths = [
  { prompt: "Hiring for a lead or senior role?", label: "Experience and CV", href: "/#experience" },
  { prompt: "Have a product to build?", label: "See the work, book a call", href: "/#work" },
];

export const nav = [
  { label: "Work", href: "/#work" },
  { label: "Experience", href: "/#experience" },
  { label: "CV", href: "/assets/abel_ghebrezadik_cv.pdf" },
  { label: "Contact", href: "/#contact" },
];
