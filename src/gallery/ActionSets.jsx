import Version from "./Version.jsx";
import { Pill, Block, Arrow, NavLink } from "../components/ui/Actions.jsx";
import { profile } from "../content/profile.js";

const NAV = ["Work", "Experience", "CV", "Contact"];
const social = [...profile.social.map((s) => s.label), "Email"];

// A · Pills and a dark call-to-action card: Wachid (27050710) and Alevtinka (27429954).
function SetA() {
  return (
    <div className="space-y-10 p-6 sm:p-10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <span className="font-semibold text-ink">{profile.name}</span>
        <span className="flex flex-wrap gap-6 text-[15px]">
          {NAV.map((n) => (
            <NavLink key={n} href="#">
              {n}
            </NavLink>
          ))}
        </span>
      </div>
      <div className="flex flex-wrap gap-3">
        <Pill href="#">Book a 15-minute call</Pill>
        <Pill href="#" tone="light">
          Download CV
        </Pill>
      </div>
      <div className="rounded-[28px] bg-ink px-6 py-12 text-paper sm:px-12">
        <p className="text-[14px] text-[#b9b5ac]">Lead roles and private work</p>
        <p className="mt-3 max-w-[560px] font-display text-[clamp(30px,4vw,44px)] leading-[1.08]">Need a backend built, or a lead for your team?</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Pill href="#" tone="paper">
            Book a call <span aria-hidden="true">→</span>
          </Pill>
          <a href="#" className="inline-flex items-center rounded-full border border-paper/40 px-5 py-3 text-[16px] font-medium text-paper hover:bg-paper/10">
            Send an enquiry
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-6 border-t border-rule pt-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display text-[clamp(36px,5vw,56px)] leading-none text-ink">{profile.name}</p>
          <p className="mt-2 text-[15px] text-body">{profile.role} · {profile.location}</p>
        </div>
        <p className="flex flex-wrap gap-2">
          {social.map((s) => (
            <a key={s} href="#" className="rounded-full border border-ink/20 px-4 py-2 text-[14px] text-ink hover:border-ink">
              {s}
            </a>
          ))}
        </p>
      </div>
    </div>
  );
}

// B · Square blocks and a full-width accent band: Noirbyte (27385292) and Rama Dharma (26766827, "Click here to contact").
function SetB() {
  return (
    <div className="space-y-10 p-6 sm:p-10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <span className="font-semibold text-ink">{profile.name}</span>
        <span className="flex flex-wrap items-center gap-6 text-[15px]">
          {NAV.slice(0, 3).map((n) => (
            <NavLink key={n} href="#">
              {n}
            </NavLink>
          ))}
          <Block href="#">Contact</Block>
        </span>
      </div>
      <div className="flex flex-wrap gap-3">
        <Block href="#" tone="ink">
          Start a project <span aria-hidden="true">→</span>
        </Block>
        <Block href="#" tone="outline">
          Download CV
        </Block>
      </div>
      <a href="#" className="group block bg-accent-ink px-6 py-10 text-white sm:px-10">
        <p className="text-[14px] text-white/85">Lead roles and private work · {profile.location}</p>
        <p className="mt-3 flex items-end justify-between gap-6 text-[clamp(32px,5.5vw,64px)] font-semibold leading-[0.95] tracking-[-0.03em]">
          Book a 15-minute call
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-2">
            →
          </span>
        </p>
      </a>
      <div className="grid gap-4 border-t-2 border-ink pt-5 text-[15px] sm:grid-cols-3">
        <p className="font-semibold text-ink">{profile.name}</p>
        <p className="text-body">{profile.email}</p>
        <p className="flex flex-wrap gap-5 sm:justify-end">
          {social.map((s) => (
            <NavLink key={s} href="#">
              {s}
            </NavLink>
          ))}
        </p>
      </div>
    </div>
  );
}

// C · Arrows and plain text: Alex Laurent (27448287) and the Swiss portfolio (27488285).
function SetC() {
  return (
    <div className="space-y-10 p-6 sm:p-10">
      <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-[13px]">
        <span className="text-ink">abel_ghebrezadik</span>
        <span className="flex flex-wrap gap-5">
          {NAV.map((n) => (
            <a key={n} href="#" className="text-body hover:text-accent-ink">
              ({n.toLowerCase()})
            </a>
          ))}
        </span>
      </div>
      <div className="flex flex-wrap gap-8 text-[18px]">
        <Arrow href="#">Book a 15-minute call</Arrow>
        <Arrow href="#">Download CV</Arrow>
        <Arrow href="#">Read the Betmate case study</Arrow>
      </div>
      <div className="grid gap-6 border-y border-ink py-8 md:grid-cols-[1fr_auto] md:items-end">
        <p className="max-w-[640px] text-[clamp(28px,4vw,44px)] font-semibold leading-[1.05] tracking-[-0.02em] text-ink">
          Hiring a lead, or building a product? Tell me what you need.
        </p>
        <Arrow href="#" className="text-[20px]">
          Get in touch
        </Arrow>
      </div>
      <div className="flex flex-wrap items-baseline justify-between gap-4 font-mono text-[13px] text-body">
        <span>(London)</span>
        <span className="flex flex-wrap gap-5">
          {social.map((s) => (
            <a key={s} href="#" className="hover:text-accent-ink">
              {s} ↗
            </a>
          ))}
        </span>
      </div>
    </div>
  );
}

export default function ActionSets() {
  return (
    <>
      <Version id="actions-a" title="Buttons · A, pills and a dark call-to-action card" source="Dribbble 27050710 (Wachid) and 27429954 (Alevtinka)">
        <SetA />
      </Version>
      <Version id="actions-b" title="Buttons · B, square blocks and an accent band" source="Dribbble 27385292 (Noirbyte) and 26766827 (Rama Dharma)">
        <SetB />
      </Version>
      <Version id="actions-c" title="Buttons · C, arrows and plain text" source="Dribbble 27448287 (Alex Laurent) and 27488285 (Swiss portfolio)">
        <SetC />
      </Version>
    </>
  );
}
