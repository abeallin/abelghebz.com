import Image from "next/image";
import Link from "next/link";
import { Pill, Block, Arrow, NavLink } from "../../src/components/ui/Actions.jsx";
import { profile } from "../../src/content/profile.js";

export const metadata = {
  title: "Brand | Abel Ghebrezadik",
  robots: { index: false, follow: false },
};

// Contrast measured on paper (#F6F4EF) on 1 October 2026; the axe gate keeps text pairs at AA.
const COLOURS = [
  { name: "Paper", hex: "#F6F4EF", use: "Page background", contrast: "" , dark: false },
  { name: "Ink", hex: "#151515", use: "Headings, names, dark bands", contrast: "16.6:1", dark: true },
  { name: "Body", hex: "#3C3C3C", use: "Paragraphs", contrast: "10.0:1", dark: true },
  { name: "Muted", hex: "#6A6A6A", use: "Dates and labels; never on tile", contrast: "4.9:1", dark: true },
  { name: "Tile", hex: "#E8E4DB", use: "Backing for screenshots and chips", contrast: "", dark: false },
  { name: "Rule", hex: "#D9D5CC", use: "1px dividers", contrast: "", dark: false },
  { name: "Accent", hex: "#D9461B", use: "Hover bars, focus ring, markers; never text", contrast: "3.95:1", dark: true },
  { name: "Accent ink", hex: "#B83A12", use: "Accent text and filled buttons", contrast: "5.2:1", dark: true },
];

const TYPE = [
  { face: "Erode", cls: "font-display", sample: "Abel Ghebrezadik", spec: "Fontshare · 400, 500 · the name, headlines, big numbers", size: "text-[56px] leading-none" },
  { face: "Author", cls: "font-sans", sample: "Ten years building backends and products across finance, property, health and gambling.", spec: "Fontshare · 400, 500, 600 · all other text; body 17px", size: "text-[22px] leading-[1.45]" },
  { face: "JetBrains Mono", cls: "font-mono", sample: "Dec 2025 — Present · C# / AWS Lambda / Kafka", spec: "Google · 400 · dates, labels, stacks", size: "text-[18px]" },
];

const RULES = [
  ["Links", "Never underlined. Actions are pills, blocks or arrows; nav links get a short accent bar on hover and focus."],
  ["Caps", "Sentence case everywhere, including labels."],
  ["Lists", "Divided rows, a ruled table or a two-column grid with bold lead-ins; no bullet characters."],
  ["Colour", "One accent. No gradients or glows; dark app screens sit on their own app colour."],
  ["Depth", "One shadow, only on floating screenshots."],
  ["Facts", "Every number comes from Abel's CV or a project; nothing is rounded up."],
];

function Heading({ children }) {
  return <h2 className="mb-6 mt-20 border-b border-ink pb-3 text-[clamp(26px,3.2vw,34px)] font-semibold tracking-[-0.015em] text-ink">{children}</h2>;
}

export default function Brand() {
  return (
    <main id="main" className="mx-auto max-w-[1240px] px-5 pb-24 pt-10 sm:px-8">
      <p className="font-mono text-[13px] text-muted">Not linked from the site, not indexed</p>
      <h1 className="mt-2 font-display text-[clamp(44px,7vw,80px)] leading-none tracking-[-0.02em] text-ink">Brand</h1>
      <p className="mt-5 max-w-[720px] text-[18px] leading-[1.6] text-body">
        The colours, type, actions and photo treatment the site is built from.{" "}
        <Link href="/gallery" className="font-medium text-ink hover:text-accent-ink">
          See them in use in the gallery →
        </Link>
      </p>

      <Heading>Name</Heading>
      <div className="grid gap-6 md:grid-cols-[1fr_1fr_auto]">
        <div className="rounded-2xl border border-rule p-8">
          <p className="font-display text-[44px] leading-none tracking-[-0.02em] text-ink">{profile.name}</p>
          <p className="mt-4 text-[14px] text-muted">Wordmark · Erode 400</p>
        </div>
        <div className="rounded-2xl bg-ink p-8">
          <p className="text-[36px] font-semibold leading-none tracking-[-0.03em] text-paper">{profile.name}</p>
          <p className="mt-4 text-[14px] text-[#b9b5ac]">Wordmark on ink · Author 600</p>
        </div>
        <div className="flex items-center gap-5 rounded-2xl border border-rule p-8">
          <span className="grid size-16 place-items-center rounded-xl bg-ink font-display text-[30px] text-paper">AG</span>
          <span className="grid size-16 place-items-center rounded-full border-2 border-ink font-display text-[28px] text-ink">AG</span>
          <span className="text-[14px] text-muted">Monogram</span>
        </div>
      </div>

      <Heading>Colour</Heading>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {COLOURS.map((c) => (
          <li key={c.hex} className="overflow-hidden rounded-2xl border border-rule bg-white">
            <div className="h-28" style={{ background: c.hex }} />
            <div className="p-4">
              <p className="text-[16px] font-semibold text-ink">{c.name}</p>
              <p className="font-mono text-[13px] text-ink">{c.hex}</p>
              <p className="mt-1 text-[14px] leading-[1.45] text-body">{c.use}</p>
              {c.contrast && <p className="mt-1 font-mono text-[12.5px] text-muted">{c.contrast} on paper</p>}
            </div>
          </li>
        ))}
      </ul>

      <Heading>Type</Heading>
      <div className="border-b border-rule">
        {TYPE.map((t) => (
          <div key={t.face} className="grid gap-3 border-t border-rule py-6 md:grid-cols-[220px_1fr]">
            <div>
              <h3 className="text-[17px] font-semibold text-ink">{t.face}</h3>
              <p className="mt-1 text-[14px] leading-[1.45] text-muted">{t.spec}</p>
            </div>
            <p className={`${t.cls} ${t.size} text-ink`}>{t.sample}</p>
          </div>
        ))}
      </div>

      <Heading>Actions</Heading>
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-4 rounded-2xl border border-rule p-8">
          <p className="text-[14px] text-muted">Pills</p>
          <div className="flex flex-wrap gap-3">
            <Pill href="#">Book a 15-minute call</Pill>
            <Pill href="#" tone="light">Download CV</Pill>
            <Pill href="#" tone="accent">Send enquiry</Pill>
          </div>
        </div>
        <div className="space-y-4 rounded-2xl border border-rule p-8">
          <p className="text-[14px] text-muted">Blocks</p>
          <div className="flex flex-wrap gap-3">
            <Block href="#">Contact</Block>
            <Block href="#" tone="ink">Start a project →</Block>
            <Block href="#" tone="outline">Download CV</Block>
          </div>
        </div>
        <div className="space-y-4 rounded-2xl border border-rule p-8">
          <p className="text-[14px] text-muted">Arrows</p>
          <div className="flex flex-wrap gap-6 text-[18px]">
            <Arrow href="#">Read the case study</Arrow>
            <Arrow href="#">Experience and CV</Arrow>
          </div>
        </div>
        <div className="space-y-4 rounded-2xl border border-rule p-8">
          <p className="text-[14px] text-muted">Nav links (hover or tab to see the bar)</p>
          <div className="flex flex-wrap gap-6 text-[16px]">
            {["Work", "Experience", "CV", "Contact"].map((n) => (
              <NavLink key={n} href="#">{n}</NavLink>
            ))}
          </div>
        </div>
      </div>

      <Heading>Photo</Heading>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[
          ["Colour", ""],
          ["Black and white", "grayscale contrast-[1.08]"],
        ].map(([label, cls]) => (
          <figure key={label}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-tile">
              <Image src={profile.photo} alt={`${profile.name}, ${label.toLowerCase()}`} fill sizes="300px" className={`object-cover ${cls}`} />
            </div>
            <figcaption className="mt-2 text-[14px] text-body">{label}</figcaption>
          </figure>
        ))}
        <p className="text-[15px] leading-[1.6] text-body sm:col-span-2">
          The current photo is 660px square, sharp up to about 400px on screen. A larger, evenly lit portrait would let a
          portrait-led hero run bigger.
        </p>
      </div>

      <Heading>Rules</Heading>
      <dl className="border-b border-rule">
        {RULES.map(([k, v]) => (
          <div key={k} className="grid gap-2 border-t border-rule py-4 md:grid-cols-[220px_1fr]">
            <dt className="text-[16px] font-semibold text-ink">{k}</dt>
            <dd className="text-[16px] leading-[1.55] text-body">{v}</dd>
          </div>
        ))}
      </dl>
    </main>
  );
}
