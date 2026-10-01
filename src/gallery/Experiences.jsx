import Image from "next/image";
import Version from "./Version.jsx";
import { Pill, Arrow } from "../components/ui/Actions.jsx";
import { experience } from "../content/experience.js";
import { profile } from "../content/profile.js";
import { skillGroups } from "../content/skills.js";

const shortPeriod = (p) => p.replace(/[A-Z][a-z]{2} /g, "").replace("Present", "now");

// A · Ruled table: EM (27550614) and Rama Dharma (26766827) — one line per role, the result on the right.
function ExpA() {
  return (
    <div className="p-6 sm:p-10">
      <div className="mb-6 flex flex-wrap items-baseline justify-between gap-4">
        <p className="font-display text-[clamp(34px,4.5vw,48px)] leading-none text-ink">Experience</p>
        <Pill href="#" tone="dark">
          Download CV <span className="font-mono text-[12px]">(PDF)</span>
        </Pill>
      </div>
      <ol>
        {experience.map((e) => (
          <li key={e.company} className="grid gap-x-6 gap-y-1 border-t border-rule py-4 last:border-b md:grid-cols-[110px_minmax(0,1fr)_minmax(0,1.4fr)] md:items-baseline">
            <span className="font-mono text-[13px] text-muted">{shortPeriod(e.period)}</span>
            <span>
              <span className="block text-[17px] font-semibold text-ink">{e.company}</span>
              <span className="block text-[15px] text-body">{e.role}</span>
            </span>
            <span className="text-[15.5px] leading-[1.55] text-ink">{e.outcome}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

// B · Timeline with a rail: Linear changelog and 21st.dev olewandowski1/timeline-1. Detail opens with <details>, no JS.
function ExpB() {
  return (
    <div className="grid gap-10 p-6 sm:p-10 lg:grid-cols-[280px_1fr]">
      <div>
        <p className="font-display text-[clamp(34px,4.5vw,48px)] leading-[1.02] text-ink">
          Ten years, <br />
          seven teams
        </p>
        <div className="mt-6">
          <Pill href="#" tone="accent">
            Download CV
          </Pill>
        </div>
      </div>
      <ol className="relative border-l border-rule pl-7">
        {experience.map((e, i) => (
          <li key={e.company} className="relative pb-7 last:pb-0">
            <span
              aria-hidden="true"
              className={`absolute -left-[34px] top-1.5 size-[11px] rounded-full border-2 ${i === 0 ? "border-accent bg-accent" : "border-ink bg-paper"}`}
            />
            <p className="font-mono text-[13px] text-muted">{e.period}</p>
            <p className="mt-0.5 text-[17px] text-ink">
              <span className="font-semibold">{e.company}</span> <span className="text-body">· {e.role}</span>
            </p>
            <p className="mt-1 max-w-[640px] text-[15.5px] leading-[1.55] text-body">{e.outcome}</p>
            <details className="group mt-2 max-w-[640px]">
              <summary className="cursor-pointer list-none text-[14px] font-medium text-ink hover:text-accent-ink [&::-webkit-details-marker]:hidden">
                <span className="group-open:hidden">More +</span>
                <span className="hidden group-open:inline">Less −</span>
              </summary>
              <p className="mt-2 text-[15px] leading-[1.55] text-body">{e.detail}</p>
              <p className="mt-2 font-mono text-[12.5px] text-muted">{e.stack.join(" / ")}</p>
            </details>
          </li>
        ))}
      </ol>
    </div>
  );
}

// C · Numbers and the person behind the work: Rama Dharma (26766827) numbers; Satz (27536327) about layout.
function ExpC() {
  const numbers = [
    ["10", "years across finance, property, health and gambling"],
    ["1M", "users on the Betmate game"],
    ["500+", "production issues resolved in 6 months at SalaryFinance"],
    ["14s \u2192 2s", "average API latency at Arena"],
  ];
  return (
    <div className="p-6 sm:p-10">
      <dl className="grid gap-px overflow-hidden rounded-2xl bg-rule sm:grid-cols-2 lg:grid-cols-4">
        {numbers.map(([n, label]) => (
          <div key={n} className="bg-paper p-6">
            <dt className="sr-only">{label}</dt>
            <dd>
              <span className="block font-display text-[56px] leading-none tracking-[-0.02em] text-ink">{n}</span>
              <span className="mt-3 block text-[15px] leading-[1.45] text-body">{label}</span>
            </dd>
          </div>
        ))}
      </dl>
      <div className="mt-12 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-[clamp(30px,4vw,44px)] font-semibold leading-[1.05] tracking-[-0.02em] text-ink">The engineer behind the work.</p>
          <div className="relative mt-6 aspect-[4/5] w-full max-w-[320px] overflow-hidden rounded-2xl">
            <Image src={profile.photo} alt={profile.name} fill sizes="320px" className="object-cover grayscale contrast-[1.08]" />
          </div>
        </div>
        <div className="grid content-start gap-6 sm:grid-cols-2">
          <p className="text-[17px] leading-[1.6] text-ink sm:col-span-2">
            {profile.role} based in {profile.location}. {profile.background}
          </p>
          {skillGroups.slice(0, 4).map((g) => (
            <div key={g.label}>
              <p className="text-[15px] font-semibold text-ink">{g.label}</p>
              <p className="mt-1 text-[15px] leading-[1.55] text-body">{g.items.join(", ")}</p>
            </div>
          ))}
          <div className="sm:col-span-2">
            <Arrow href="#">All skills and the full CV</Arrow>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Experiences() {
  return (
    <>
      <Version id="experience-a" title="Experience · A, ruled table" source="Dribbble 27550614 (EM) and 26766827 (Rama Dharma)">
        <ExpA />
      </Version>
      <Version id="experience-b" title="Experience · B, timeline with more on demand" source="Linear changelog and 21st.dev olewandowski1/timeline-1">
        <ExpB />
      </Version>
      <Version
        id="experience-c"
        title="Experience · C, numbers and the person"
        source="Dribbble 26766827 (Rama Dharma, numbers) and 27536327 (Satz, about)"
        note="Every number comes from your experience entries."
      >
        <ExpC />
      </Version>
    </>
  );
}
