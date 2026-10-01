import { profile } from "../content/profile.js";

// Text links, no icons: the hero mockup Abel approved shows a quiet text row.
export default function SocialRow({ className = "" }) {
  const links = [
    ...profile.social,
    { label: profile.email, url: `mailto:${profile.email}` },
    { label: profile.phone.label, url: profile.phone.url },
  ];
  return (
    <ul className={`flex flex-wrap gap-x-6 gap-y-2 text-[15px] text-body ${className}`} aria-label="Contact links">
      {links.map((l) => (
        <li key={l.label}>
          <a
            href={l.url}
            className="hover:text-ink hover:underline hover:decoration-accent hover:underline-offset-4"
            {...(l.url.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            {l.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
