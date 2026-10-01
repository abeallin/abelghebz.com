// A short user journey as numbered screens joined by arrows, based on Mobbin's flows (two screens and a connector,
// titled with what the user is doing). The arrows are decorative; the order lives in the <ol>.
import Image from "next/image";

function Connector() {
  return (
    <span data-connector aria-hidden="true" className="flex shrink-0 items-center self-center px-1 text-muted">
      <svg viewBox="0 0 40 16" className="h-4 w-10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 8h36M31 2l6 6-6 6" />
      </svg>
    </span>
  );
}

export default function FlowStrip({ flow, screens, id = "flow" }) {
  const ratioOf = (src) => screens.find((s) => s.src === src)?.ratio ?? "web";
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-6 border-t border-rule py-8">
      <p className="font-mono text-[13px] text-muted">How it works</p>
      <h2 id={`${id}-title`} className="mt-1 font-display text-[26px] leading-[1.15] text-ink">
        {flow.title}
      </h2>
      {/* Focusable so keyboard users can scroll it when the steps overflow (WCAG 2.1.1; axe scrollable-region-focusable). */}
      <ol tabIndex={0} aria-labelledby={`${id}-title`} className="mt-6 flex items-start overflow-x-auto rounded-lg pb-3 [scrollbar-width:thin]">
        {flow.steps.map((step, i) => {
          const phone = ratioOf(step.src) === "phone";
          return (
            <li key={step.src} className="flex shrink-0 items-start">
              <figure className={phone ? "w-[150px]" : "w-[min(300px,70vw)]"}>
                <div className={`relative overflow-hidden bg-tile shadow-float ${phone ? "aspect-[917/2048] rounded-[16px]" : "aspect-[16/9] rounded-lg"}`}>
                  <Image src={step.src} alt={step.caption} fill sizes={phone ? "150px" : "300px"} className="object-cover object-top" />
                </div>
                <figcaption className="mt-3 text-[14.5px] leading-[1.35] text-ink">
                  <span className="mr-1.5 inline-grid size-6 place-items-center rounded-full bg-ink font-mono text-[12px] text-paper">{i + 1}</span>{" "}
                  {step.caption}
                </figcaption>
              </figure>
              {i < flow.steps.length - 1 && (
                <span className={phone ? "mt-[150px]" : "mt-[70px]"}>
                  <Connector />
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </section>
  );
}
