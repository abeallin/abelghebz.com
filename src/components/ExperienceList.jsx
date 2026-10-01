// Date rail based on Linear's changelog and 21st.dev olewandowski1/timeline-1.
import Container from "./Container.jsx";
import SectionLabel from "./SectionLabel.jsx";
import { experience } from "../content/experience.js";
import { profile } from "../content/profile.js";

const hoverLink = "hover:underline hover:decoration-accent hover:underline-offset-4";

export default function ExperienceList() {
  return (
    <Container as="section" id="experience" aria-labelledby="experience-label" className="py-16 sm:py-20">
      <div className="grid gap-8 md:grid-cols-[160px_1fr] md:gap-6">
        <SectionLabel id="experience-label">Experience</SectionLabel>
        <div>
          <div className="mb-6 flex flex-wrap items-baseline justify-between gap-4">
            <p className="max-w-[520px] text-[17px] text-body">Ten years, seven teams. The full detail is in the CV.</p>
            <a href={profile.cvPath} className="rounded-md bg-accent-ink px-4 py-2.5 text-[15px] font-medium text-white hover:bg-ink">
              Download CV <span className="font-mono text-[12px]">(PDF)</span>
            </a>
          </div>
          <ol className="border-b border-rule">
            {experience.map((e) => (
              <li key={e.company} className="grid gap-x-6 gap-y-1 border-t border-rule py-5 sm:grid-cols-[150px_1fr]">
                <p className="pt-0.5 font-mono text-[13px] text-muted">{e.period}</p>
                <div>
                  <h3 className="text-[17px] text-ink">
                    <span className="font-semibold">
                      {e.link ? (
                        <a href={e.link.url} target="_blank" rel="noopener noreferrer" className={hoverLink}>
                          {e.company}
                        </a>
                      ) : (
                        e.company
                      )}
                    </span>
                    <span className="text-body"> · {e.role}</span>
                  </h3>
                  <p className="mt-1 text-[16px] leading-[1.55] text-ink">{e.outcome}</p>
                  <p className="mt-1 text-[15px] leading-[1.55] text-body">{e.detail}</p>
                  <p className="mt-2 font-mono text-[12.5px] text-muted">{e.stack.join(" / ")}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Container>
  );
}
