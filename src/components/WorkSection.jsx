// Gallery Work D, picked by Abel on 1 October 2026: one featured project, two beside each other beneath.
// Based on Mobbin's app pages and Dribbble 27536327 (Satz). Each cover sits on its app's own colour.
import Image from "next/image";
import Container from "./Container.jsx";
import SectionLabel from "./SectionLabel.jsx";
import { Pill } from "./ui/Actions.jsx";
import StackChips from "./StackChips.jsx";
import { projects } from "../content/projects.js";

const COVER = { betmate: "#0C1A4B", cabeazy: "#1B1A16", gpflow: "#0F1A17", whenwillyoumarry: "#211E19" };

function Shots({ project, compact = false }) {
  const [a, b] = project.screens;
  if (a.ratio === "phone") {
    const size = compact ? "h-[250px] w-[115px]" : "h-[330px] w-[150px]";
    return (
      <>
        <div className={`absolute left-[16%] top-8 overflow-hidden rounded-[18px] shadow-float ${size}`}>
          <Image src={a.src} alt="" fill sizes="150px" className="object-cover object-top" />
        </div>
        <div className={`absolute left-[50%] top-16 overflow-hidden rounded-[18px] shadow-float ${size}`}>
          <Image src={b.src} alt="" fill sizes="150px" className="object-cover object-top" />
        </div>
      </>
    );
  }
  return (
    <>
      <div className="absolute left-[7%] top-8 aspect-[16/9] w-[74%] overflow-hidden rounded-lg shadow-float">
        <Image src={a.src} alt="" fill sizes="(min-width: 768px) 420px, 80vw" className="object-cover object-top" />
      </div>
      <div className="absolute left-[20%] top-[44%] aspect-[16/9] w-[74%] overflow-hidden rounded-lg shadow-float">
        <Image src={b.src} alt="" fill sizes="(min-width: 768px) 420px, 80vw" className="object-cover object-top" />
      </div>
    </>
  );
}

export default function WorkSection() {
  const [first, ...rest] = projects;
  return (
    <Container as="section" id="work" aria-labelledby="work-label" className="py-16 sm:py-20">
      <div className="mb-8 flex flex-wrap items-baseline justify-between gap-4">
        <SectionLabel id="work-label">Selected work</SectionLabel>
      </div>
      <article data-featured={first.slug} className="grid overflow-hidden rounded-3xl bg-tile lg:grid-cols-2">
        <a href={`/work/${first.slug}`} tabIndex={-1} aria-hidden="true" className="relative block min-h-[400px] overflow-hidden" style={{ background: COVER[first.slug] }}>
          <Shots project={first} />
        </a>
        <div className="flex flex-col justify-between gap-8 p-7 sm:p-10">
          <div>
            <p className="font-mono text-[13px] text-body">(Featured) · {first.eyebrow}</p>
            <h3 className="mt-3 font-display text-[clamp(30px,3.6vw,42px)] font-normal leading-[1.06] tracking-[-0.01em] text-ink">{first.headline}</h3>
            <p className="mt-4 text-[17px] leading-[1.6] text-body">{first.summary}</p>
            <StackChips items={first.stack.slice(0, 4)} />
          </div>
          <div>
            <Pill href={`/work/${first.slug}`}>Read the {first.name} case study</Pill>
          </div>
        </div>
      </article>
      <div className={`mt-6 grid gap-6 md:grid-cols-2 ${rest.length === 3 ? "lg:grid-cols-3" : ""}`}>
        {rest.map((p) => (
          <article key={p.slug} className="group flex flex-col overflow-hidden rounded-3xl bg-tile">
            <a href={`/work/${p.slug}`} tabIndex={-1} aria-hidden="true" className="relative block h-[260px] overflow-hidden" style={{ background: COVER[p.slug] }}>
              <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.02] motion-reduce:transition-none">
                <Shots project={p} compact />
              </div>
            </a>
            <div className="flex flex-1 flex-col justify-between gap-6 p-7">
              <div>
                <p className="text-[14px] font-medium text-accent-ink">{p.eyebrow}</p>
                <h3 className="mt-1 text-[21px] font-semibold leading-[1.3] tracking-[-0.01em] text-ink">{p.headline}</h3>
                <StackChips items={p.stack.slice(0, 3)} />
              </div>
              <div>
                <Pill href={`/work/${p.slug}`} tone="light">
                  Read the case study<span className="sr-only">: {p.name}</span>
                </Pill>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Container>
  );
}
