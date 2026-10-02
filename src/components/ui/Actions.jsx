// The action styles the gallery compares. None of them underlines: the reference sites mark actions with
// shape (pills, blocks) or direction (arrows), and keep plain text links for the nav.
//   Pill  — Dribbble 27050710 / 27063944 (Wachid, "Book a call") and 27429954 (Alevtinka, "Send inquiry")
//   Block — Dribbble 27385292 (Hatypo "Noirbyte", "Contact" / "Start a project") and 26766827 (Rama Dharma)
//   Arrow — Dribbble 27448287 (Alex Laurent) and 27488285 (Swiss portfolio): text plus a moving arrow

import Link from "next/link";

// Site routes go through next/link (no full page reload); files and other sites stay plain links.
const isRoute = (href) => typeof href === "string" && href.startsWith("/") && !href.startsWith("/assets/");

const pillBase =
  "inline-flex items-center gap-2 rounded-full px-5 py-3 text-[16px] font-medium transition-colors duration-200";

export function Pill({ href, children, tone = "dark", ...rest }) {
  const Tag = isRoute(href) ? Link : "a";
  const tones = {
    dark: "bg-ink text-paper hover:bg-accent-ink",
    light: "border border-ink/25 bg-transparent text-ink hover:border-ink hover:bg-ink hover:text-paper",
    paper: "bg-paper text-ink hover:bg-tile",
    accent: "bg-accent-ink text-white hover:bg-ink",
  };
  return (
    <Tag href={href} className={`${pillBase} ${tones[tone]}`} {...rest}>
      {children}
    </Tag>
  );
}

export function Block({ href, children, tone = "accent", ...rest }) {
  const tones = {
    accent: "bg-accent-ink text-white hover:bg-ink",
    ink: "bg-ink text-paper hover:bg-accent-ink",
    outline: "border-2 border-ink text-ink hover:bg-ink hover:text-paper",
  };
  return (
    <a href={href} className={`inline-flex items-center gap-3 px-5 py-3.5 text-[16px] font-semibold transition-colors duration-200 ${tones[tone]}`} {...rest}>
      {children}
    </a>
  );
}

export function Arrow({ href, children, className = "", ...rest }) {
  return (
    <a href={href} className={`group inline-flex items-baseline gap-2 font-medium text-ink hover:text-accent-ink ${className}`} {...rest}>
      {children}
      <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none">
        →
      </span>
    </a>
  );
}

// Plain nav link: no underline at rest; a short accent bar slides in under it on hover and focus.
export function NavLink({ href, children, ...rest }) {
  const Tag = isRoute(href) ? Link : "a";
  return (
    <Tag
      href={href}
      className="relative text-body transition-colors hover:text-ink focus-visible:text-ink after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-accent after:transition-all hover:after:w-full focus-visible:after:w-full motion-reduce:after:transition-none"
      {...rest}
    >
      {children}
    </Tag>
  );
}
