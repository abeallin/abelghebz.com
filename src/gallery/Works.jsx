import Image from "next/image";
import Version from "./Version.jsx";
import { Arrow } from "../components/ui/Actions.jsx";
import { projects } from "../content/projects.js";
import { COVER } from "../content/covers.js";


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
        <Image src={a.src} alt="" fill sizes="420px" className="object-cover object-top" />
      </div>
      <div className="absolute left-[20%] top-[44%] aspect-[16/9] w-[74%] overflow-hidden rounded-lg shadow-float">
        <Image src={b.src} alt="" fill sizes="420px" className="object-cover object-top" />
      </div>
    </>
  );
}

function Chips({ items }) {
  return (
    <p className="mt-4 flex flex-wrap gap-2">
      {items.map((s) => (
        <span key={s} className="rounded-md bg-tile px-2.5 py-1 font-mono text-[12.5px] text-ink">
          {s}
        </span>
      ))}
    </p>
  );
}

// A · Cover cards: Linear and Vercel customer cards; Mobbin screen cards.
function WorkA() {
  return (
    <div className="grid gap-6 p-6 sm:p-10 md:grid-cols-2">
      {projects.map((p, i) => (
        <a key={p.slug} href="#" className={`group overflow-hidden rounded-2xl border border-rule bg-white ${i === 0 ? "md:col-span-2" : ""}`}>
          <div className="relative h-[300px] overflow-hidden sm:h-[340px]" style={{ background: COVER[p.slug] }}>
            <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.02] motion-reduce:transition-none">
              <Shots project={p} />
            </div>
          </div>
          <div className="p-6">
            <p className="text-[14px] font-medium text-accent-ink">{p.eyebrow}</p>
            <p className="mt-1 text-[22px] font-semibold leading-[1.25] tracking-[-0.01em] text-ink">{p.headline}</p>
            <Chips items={p.stack.slice(0, 3)} />
          </div>
        </a>
      ))}
    </div>
  );
}

// B · Ink band: Noirbyte (27385292) and EM (27550614) — the work on a dark band so the screens glow.
function WorkB() {
  return (
    <div className="bg-ink p-6 text-paper sm:p-10 lg:p-14">
      <p className="font-display text-[clamp(36px,5vw,52px)] leading-none">Selected work</p>
      <p className="mt-3 text-[17px] text-[#b9b5ac]">From a betting game with 1 million users to tools for the NHS.</p>
      {projects.slice(0, 2).map((p) => (
        <div key={p.slug} className="mt-10 grid gap-8 border-t border-[#2c2c2c] pt-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="relative h-[380px] overflow-hidden rounded-xl" style={{ background: COVER[p.slug] }}>
            <Shots project={p} />
          </div>
          <div>
            <p className="text-[14px] font-medium text-[#F5A182]">{p.eyebrow}</p>
            <p className="mt-2 font-display text-[clamp(28px,3.4vw,38px)] leading-[1.08]">{p.headline}</p>
            <p className="mt-4 text-[16.5px] leading-[1.6] text-[#cfcbc2]">{p.summary}</p>
            <a href="#" className="mt-6 inline-flex items-center gap-2 rounded-full bg-paper px-5 py-3 text-[15px] font-medium text-ink hover:bg-tile">
              Read the case study <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

// C · Index list: EM (27550614) ruled work table and Rama Dharma (26766827) — one row per project, thumbnail beside it.
function WorkC() {
  return (
    <div className="p-6 sm:p-10">
      <div className="hidden grid-cols-[48px_1fr_160px_120px_40px] gap-4 border-b border-ink pb-2 font-mono text-[12.5px] text-muted md:grid">
        <span>No.</span>
        <span>Project</span>
        <span>Type</span>
        <span>Year</span>
        <span />
      </div>
      {projects.map((p, i) => (
        <a key={p.slug} href="#" className="group grid gap-4 border-b border-rule py-5 md:grid-cols-[48px_1fr_160px_120px_40px] md:items-center">
          <span className="font-mono text-[13px] text-muted">0{i + 1}</span>
          <span className="flex items-center gap-5">
            <span className="relative hidden h-[64px] w-[104px] shrink-0 overflow-hidden rounded-md sm:block" style={{ background: COVER[p.slug] }}>
              <Image src={p.screens[0].src} alt="" fill sizes="104px" className="object-cover object-top" />
            </span>
            <span>
              <span className="block text-[20px] font-semibold text-ink group-hover:text-accent-ink">{p.name}</span>
              <span className="block text-[15px] text-body">{p.headline}</span>
            </span>
          </span>
          <span className="text-[15px] text-body">{p.kind === "mobile" ? "Mobile game backend" : p.slug === "gpflow" ? "Desktop and web app" : "Web product"}</span>
          <span className="font-mono text-[13px] text-muted">{p.eyebrow.match(/20\d\d/)?.[0] ?? "—"}</span>
          <span aria-hidden="true" className="text-[20px] text-ink transition-transform group-hover:translate-x-1">
            →
          </span>
        </a>
      ))}
    </div>
  );
}

// D · Showcase grid: Mobbin's app pages and Satz (27536327) — one large feature, two smaller beneath.
function WorkD() {
  const [first, ...rest] = projects;
  return (
    <div className="grid gap-6 p-6 sm:p-10">
      <div className="grid overflow-hidden rounded-2xl bg-tile lg:grid-cols-[1fr_1fr]">
        <div className="relative min-h-[380px]" style={{ background: COVER[first.slug] }}>
          <Shots project={first} />
        </div>
        <div className="flex flex-col justify-between gap-8 p-8">
          <div>
            <p className="font-mono text-[12.5px] text-body">(Featured)</p>
            <p className="mt-3 font-display text-[clamp(28px,3.4vw,40px)] leading-[1.06] text-ink">{first.headline}</p>
            <p className="mt-4 text-[16.5px] leading-[1.6] text-body">{first.summary}</p>
          </div>
          <Arrow href="#">Read the Betmate case study</Arrow>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {rest.map((p) => (
          <a key={p.slug} href="#" className="group overflow-hidden rounded-2xl bg-tile">
            <div className="relative h-[240px]" style={{ background: COVER[p.slug] }}>
              <Shots project={p} compact />
            </div>
            <div className="p-6">
              <p className="text-[20px] font-semibold leading-[1.3] text-ink group-hover:text-accent-ink">{p.headline}</p>
              <Chips items={p.stack.slice(0, 3)} />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default function Works() {
  return (
    <>
      <Version id="work-a" title="Work · A, cover cards" source="Linear and Vercel customer stories; Mobbin screen cards">
        <WorkA />
      </Version>
      <Version id="work-b" title="Work · B, ink band" source="Dribbble 27385292 (Noirbyte) and 27550614 (EM)" dark>
        <WorkB />
      </Version>
      <Version id="work-c" title="Work · C, index list" source="Dribbble 27550614 (EM) and 26766827 (Rama Dharma)">
        <WorkC />
      </Version>
      <Version id="work-d" title="Work · D, one featured, two beside" source="Mobbin app pages and Dribbble 27536327 (Satz)">
        <WorkD />
      </Version>
    </>
  );
}
