import Link from "next/link";
import Heroes from "../../src/gallery/Heroes.jsx";
import Works from "../../src/gallery/Works.jsx";
import Experiences from "../../src/gallery/Experiences.jsx";
import ActionSets from "../../src/gallery/ActionSets.jsx";

export const metadata = {
  title: "Gallery | Abel Ghebrezadik",
  robots: { index: false, follow: false },
};

const SECTIONS = [
  { id: "hero", name: "Hero", Body: Heroes },
  { id: "work", name: "Work", Body: Works },
  { id: "experience", name: "Experience and about", Body: Experiences },
  { id: "actions", name: "Buttons, links, contact and footer", Body: ActionSets },
];

export default function Gallery() {
  return (
    <main id="main" className="mx-auto max-w-[1240px] px-5 pb-24 pt-10 sm:px-8">
      <p className="font-mono text-[13px] text-muted">Not linked from the site, not indexed</p>
      <h1 className="mt-2 font-display text-[clamp(44px,7vw,80px)] leading-none tracking-[-0.02em] text-ink">Gallery</h1>
      <p className="mt-5 max-w-[760px] text-[18px] leading-[1.6] text-body">
        Versions of each part of the site, each built from a reference design we scanned, with your real content. Pick one per
        section by its label, or mix them (for example &ldquo;Hero · C with Work · B&rdquo;). The colours and type are in{" "}
        <Link href="/brand" className="font-medium text-ink hover:text-accent-ink">
          the brand page →
        </Link>
      </p>
      <nav aria-label="Gallery sections" className="mt-8 flex flex-wrap gap-2">
        {SECTIONS.map((s) => (
          <a key={s.id} href={`#${s.id}`} className="rounded-full border border-ink/20 px-4 py-2 text-[15px] text-ink hover:border-ink">
            {s.name}
          </a>
        ))}
      </nav>
      {SECTIONS.map(({ id, name, Body }) => (
        <section key={id} id={id} aria-labelledby={`${id}-title`} className="mt-20 scroll-mt-6">
          <h2 id={`${id}-title`} className="mb-8 border-b border-ink pb-3 text-[clamp(28px,3.5vw,36px)] font-semibold tracking-[-0.015em] text-ink">
            {name}
          </h2>
          <div className="space-y-16">
            <Body />
          </div>
        </section>
      ))}
    </main>
  );
}
