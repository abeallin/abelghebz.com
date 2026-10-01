// Gallery Experience B, picked by Abel on 1 October 2026: a timeline with each role's detail behind "More".
// Based on Linear's changelog and 21st.dev olewandowski1/timeline-1. <details> opens without JavaScript.
import Container from "./Container.jsx";
import SectionLabel from "./SectionLabel.jsx";
import { Pill } from "./ui/Actions.jsx";
import { PdfIcon, WordIcon } from "./ui/Icons.jsx";
import { experience } from "../content/experience.js";
import { profile } from "../content/profile.js";

export default function ExperienceList() {
  return (
    <Container as="section" id="experience" aria-labelledby="experience-label" className="py-16 sm:py-20">
      <div className="grid gap-10 lg:grid-cols-[300px_1fr]">
        <div>
          <SectionLabel id="experience-label">Experience</SectionLabel>
          <p className="mt-4 font-display text-[clamp(36px,4.6vw,52px)] leading-[1.02] tracking-[-0.015em] text-ink">
            Ten years, <br />
            seven teams
          </p>
          <p className="mt-7 text-[14px] text-muted">Download the CV</p>
          <div className="mt-2 flex flex-wrap gap-2">
            <Pill href={profile.cvPath} tone="accent">
              <PdfIcon className="size-5" />
              PDF<span className="sr-only"> (CV as PDF)</span>
            </Pill>
            <Pill href={profile.cvDocxPath} tone="light">
              <WordIcon className="size-5" />
              Word<span className="sr-only"> (CV as Word document)</span>
            </Pill>
          </div>
        </div>
        <ol className="relative ml-1.5 border-l border-rule pl-8">
          {experience.map((e, i) => (
            <li key={e.company} className="relative pb-9 last:pb-0">
              <span
                aria-hidden="true"
                className={`absolute -left-[38.5px] top-1.5 size-3 rounded-full border-2 ${i === 0 ? "border-accent bg-accent" : "border-ink bg-paper"}`}
              />
              <p className="font-mono text-[13px] text-muted">{e.period}</p>
              <h3 className="mt-1 text-[19px] text-ink">
                <span className="font-semibold">{e.company}</span>
                <span className="text-body"> · {e.role}</span>
              </h3>
              <p className="mt-1.5 max-w-[680px] text-[16.5px] leading-[1.55] text-ink">{e.outcome}</p>
              <details className="group mt-3 max-w-[680px]">
                <summary className="inline-flex cursor-pointer list-none items-center gap-1.5 rounded-full border border-ink/20 px-3.5 py-1.5 text-[14px] font-medium text-ink hover:border-ink [&::-webkit-details-marker]:hidden">
                  <span className="group-open:hidden">More</span>
                  <span className="hidden group-open:inline">Less</span>
                  <span aria-hidden="true" className="transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-[15.5px] leading-[1.6] text-body">{e.detail}</p>
                <p className="mt-2 font-mono text-[12.5px] text-muted">{e.stack.join(" / ")}</p>
                {e.link && (
                  <a
                    href={e.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex rounded-full bg-tile px-3.5 py-1.5 text-[14px] font-medium text-ink hover:bg-ink hover:text-paper"
                  >
                    {e.link.label} <span aria-hidden="true">&nbsp;↗</span>
                  </a>
                )}
              </details>
            </li>
          ))}
        </ol>
      </div>
    </Container>
  );
}
