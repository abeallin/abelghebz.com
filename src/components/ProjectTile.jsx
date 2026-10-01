// Based on Mobbin's "Explore screens" cards: bare screens, overlapping on a soft tile, no device frame.
import Image from "next/image";
import FactsRow from "./FactsRow.jsx";

const lift =
  "transition-transform duration-300 group-hover:-translate-y-1 group-focus-within:-translate-y-1 motion-reduce:transition-none";

function TileArt({ project }) {
  const [a, b] = project.screens;
  if (a.ratio === "phone") {
    return (
      <div className="relative h-[250px] overflow-hidden rounded-2xl bg-tile sm:h-[270px]">
        <div className={`absolute left-[14%] top-6 h-[260px] w-[120px] overflow-hidden rounded-[18px] shadow-float ${lift}`}>
          <Image src={a.src} alt="" fill sizes="120px" className="object-cover object-top" />
        </div>
        <div className={`absolute left-[calc(14%+92px)] top-14 h-[260px] w-[120px] overflow-hidden rounded-[18px] shadow-float delay-75 ${lift}`}>
          <Image src={b.src} alt="" fill sizes="120px" className="object-cover object-top" />
        </div>
      </div>
    );
  }
  return (
    <div className="relative h-[250px] overflow-hidden rounded-2xl bg-tile sm:h-[270px]">
      <div className={`absolute left-6 top-7 aspect-[16/9] w-[72%] overflow-hidden rounded-lg shadow-float ${lift}`}>
        <Image src={a.src} alt="" fill sizes="(min-width: 768px) 320px, 70vw" className="object-cover object-top" />
      </div>
      <div className={`absolute left-[22%] top-[42%] aspect-[16/9] w-[72%] overflow-hidden rounded-lg shadow-float delay-75 ${lift}`}>
        <Image src={b.src} alt="" fill sizes="(min-width: 768px) 320px, 70vw" className="object-cover object-top" />
      </div>
    </div>
  );
}

// The tile's facts: the first two project facts plus the lead stack, never two rows with one label.
function tileFacts(project) {
  const facts = project.facts.slice(0, 2);
  if (!facts.some((f) => f.label === "Stack")) facts.push({ label: "Stack", value: project.stack.slice(0, 3).join(", ") });
  return facts;
}

export default function ProjectTile({ project }) {
  const href = `/work/${project.slug}`;
  return (
    <article className="group grid items-center gap-6 md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] md:gap-10">
      <a href={href} tabIndex={-1} aria-hidden="true">
        <TileArt project={project} />
      </a>
      <div>
        <p className="text-[14px] font-medium text-accent-ink">{project.eyebrow}</p>
        <h3 className="mt-1 text-[23px] font-semibold leading-[1.25] tracking-[-0.01em] text-ink">
          <a href={href} className="hover:underline hover:decoration-accent hover:decoration-[1.5px] hover:underline-offset-4">
            {project.headline}
          </a>
        </h3>
        <p className="mt-2 text-[16px] leading-[1.55] text-body">{project.summary}</p>
        <FactsRow facts={tileFacts(project)} />
        <a href={href} className="link-underline mt-5 inline-block text-[15px] font-medium text-ink">
          Read the case study<span className="sr-only">: {project.name}</span>
        </a>
      </div>
    </article>
  );
}
