// Gallery Buttons A footer, picked by Abel on 1 October 2026: the name set large, pill links.
// Based on Dribbble 27429954 (Alevtinka).
import Container from "./Container.jsx";
import { profile } from "../content/profile.js";

export default function Footer() {
  const links = [
    ...profile.social,
    { label: "Email", url: `mailto:${profile.email}` },
    { label: "Phone", url: profile.phone.url },
  ];
  return (
    <footer className="border-t border-rule py-12">
      <Container className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display text-[clamp(36px,5vw,56px)] leading-none tracking-[-0.015em] text-ink">{profile.name}</p>
          <p className="mt-3 text-[15px] text-body">
            {profile.role} · {profile.location}
          </p>
        </div>
        <ul className="flex flex-wrap gap-2" aria-label="Contact links">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.url}
                className="inline-flex rounded-full border border-ink/20 px-4 py-2 text-[14px] text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper"
                {...(l.url.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </footer>
  );
}
