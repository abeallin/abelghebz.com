import { HIRING_EMAIL } from "./routing.js";

// next.config.mjs sets these from each file's contents at build time; outside a Next build the plain path is used.
const versioned = (path, v) => (v ? `${path}?v=${v}` : path);
const CV_PDF = versioned("/assets/abel_ghebrezadik_cv.pdf", process.env.CV_PDF_VERSION);
const CV_DOCX = versioned("/assets/abel_ghebrezadik_cv.docx", process.env.CV_DOCX_VERSION);

export const profile = {
  name: "Abel Ghebrezadik",
  role: "Lead / Senior Software Engineer",
  location: "London",
  summary:
    "Ten years building backends and products across finance, property, health and gambling. I lead greenfield builds, clear out legacy tech debt and ship systems that scale.",
  background: "Self-taught developer with a Mathematics degree.",
  cvPath: CV_PDF,
  cvDocxPath: CV_DOCX,
  photo: "/me.jpg",
  email: HIRING_EMAIL,
  phone: { label: "+44 7527 841324", url: "tel:+447527841324" },
  social: [
    { label: "GitHub", url: "https://github.com/abeallin" },
    { label: "LinkedIn", url: "https://linkedin.com/in/abel-ghebrezadik" },
  ],
};

// Hero "Worked with" row (gallery Hero D), newest first; names chosen by Abel, 2 Oct 2026.
export const workedWith = ["Arena Entertainment", "Betmate", "NHS England", "SalaryFinance", "Optal (a Wex company)", "London Metal Exchange"];

export const paths = [
  { prompt: "Hiring for a lead or senior role?", label: "Experience and CV", href: "/#experience" },
  { prompt: "Have a product to build?", label: "See the work, book a call", href: "/#work" },
];

export const nav = [
  { label: "Work", href: "/#work" },
  { label: "Experience", href: "/#experience" },
  { label: "CV", href: CV_PDF },
  { label: "Contact", href: "/#contact" },
];
