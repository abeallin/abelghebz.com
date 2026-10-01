import Image from "next/image";
import Version from "./Version.jsx";
import { Pill, Block, Arrow } from "../components/ui/Actions.jsx";
import { profile } from "../content/profile.js";
import { experience } from "../content/experience.js";

const roleLine = `${profile.role} · ${profile.location}`;

function Portrait({ bw, className = "", sizes = "420px" }) {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-tile ${className}`}>
      <Image src={profile.photo} alt={profile.name} fill sizes={sizes} className={`object-cover ${bw ? "grayscale contrast-[1.08]" : ""}`} />
    </div>
  );
}

// A · Portrait-led: Satz (27536327) "The person behind the work" and Noirbyte (27385292).
function HeroA({ bw }) {
  return (
    <div className="grid gap-10 p-6 sm:p-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-14 lg:p-14">
      <div>
        <p className="font-mono text-[13px] text-muted">({profile.location})</p>
        <p className="mt-4 font-display text-[clamp(48px,8vw,104px)] leading-[0.92] tracking-[-0.025em] text-ink">
          Abel <br />
          Ghebrezadik
        </p>
        <p className="mt-6 max-w-[560px] text-[19px] leading-[1.55] text-body">{profile.summary}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Pill href="#">Hiring? See experience and CV</Pill>
          <Pill href="#" tone="light">Have a product? Book a call</Pill>
        </div>
      </div>
      <div>
        <Portrait bw={bw} className="aspect-[4/5] w-full max-w-[400px]" />
        <p className="mt-3 flex justify-between font-mono text-[12.5px] text-muted">
          <span>({profile.role})</span>
          <span>(Based in {profile.location})</span>
        </p>
      </div>
    </div>
  );
}

// B · Giant name: Nick (27488285) and Kolvac (27158301) — the surname set as the page's architecture.
function HeroB() {
  return (
    <div className="p-6 sm:p-10 lg:p-14">
      <div className="grid gap-8 sm:grid-cols-[1fr_auto] sm:items-start">
        <div className="grid max-w-[640px] gap-6 sm:grid-cols-2">
          <p className="text-[15px] leading-[1.55] text-body">
            <span className="block font-semibold text-ink">{profile.role}</span>
            Ten years across finance, property, health and gambling.
          </p>
          <p className="text-[15px] leading-[1.55] text-body">
            <span className="block font-semibold text-ink">Recently</span>
            {experience.slice(0, 3).map((e) => e.company).join(", ")}.
          </p>
        </div>
        <Portrait bw className="aspect-square w-[140px]" sizes="140px" />
      </div>
      <p className="mt-10 font-sans text-[clamp(56px,15.5vw,214px)] font-semibold leading-[0.8] tracking-[-0.055em] text-ink">Ghebrezadik</p>
      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-ink pt-5">
        <p className="text-[15px] text-body">Abel Ghebrezadik · {profile.location}</p>
        <div className="flex flex-wrap gap-6 text-[16px]">
          <Arrow href="#">Experience and CV</Arrow>
          <Arrow href="#">Work and a 15-minute call</Arrow>
        </div>
      </div>
    </div>
  );
}

// C · Showcase split: Alshurafa (27641632) and Hegia (27596907) — the work fills half the first screen.
function HeroC() {
  return (
    <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
      <div className="flex flex-col justify-between gap-10 p-6 sm:p-10 lg:p-14">
        <div>
          <p className="font-mono text-[13px] text-muted">{roleLine}</p>
          <p className="mt-4 font-display text-[clamp(44px,6vw,84px)] leading-[0.92] tracking-[-0.025em] text-ink">
            Abel <br />
            Ghebrezadik
          </p>
          <p className="mt-5 max-w-[480px] text-[18px] leading-[1.55] text-body">
            Ten years building backends and products across finance, property, health and gambling.
          </p>
        </div>
        <div className="border-t border-rule">
          {[
            ["Experience and CV", "For hiring managers"],
            ["Work and a 15-minute call", "For clients"],
          ].map(([label, who]) => (
            <a key={label} href="#" className="group flex items-baseline justify-between gap-4 border-b border-rule py-4 text-ink">
              <span className="text-[18px] font-medium group-hover:text-accent-ink">{label}</span>
              <span className="text-[14px] text-muted">
                {who} <span aria-hidden="true">→</span>
              </span>
            </a>
          ))}
        </div>
      </div>
      <div className="relative min-h-[420px] overflow-hidden bg-[#0C1A4B] lg:min-h-[560px]">
        {[
          ["/screenshots/FOS1.jpeg", "left-[6%] top-16 -rotate-6"],
          ["/screenshots/FOS10.jpeg", "left-[34%] top-8 z-10"],
          ["/screenshots/FOS8.jpeg", "left-[62%] top-20 rotate-6"],
        ].map(([src, pos]) => (
          <div key={src} className={`absolute h-[330px] w-[150px] overflow-hidden rounded-[20px] shadow-float sm:h-[420px] sm:w-[190px] ${pos}`}>
            <Image src={src} alt="" fill sizes="190px" className="object-cover object-top" />
          </div>
        ))}
        <div className="absolute inset-x-6 bottom-5 flex items-baseline justify-between gap-4 text-white">
          <span className="text-[15px]">
            <span className="font-display text-[24px]">Betmate</span> · 1 million users
          </span>
          <a href="#" className="text-[15px] font-medium text-white hover:text-[#F5C2AE]">
            Case study <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}

// D · Quiet CV: Wachid (27050710 light, 27063944 dark) — narrow column, one pill, a "worked with" row, a sign-off.
function HeroD() {
  return (
    <div className="mx-auto max-w-[700px] px-6 py-12 sm:py-16">
      <div className="flex items-center gap-4">
        <Portrait className="size-14 shrink-0 rounded-full" sizes="56px" />
        <p className="text-[15px] text-body">
          <span className="block font-semibold text-ink">{profile.name}</span>
          {roleLine}
        </p>
      </div>
      <p className="mt-8 font-display text-[clamp(34px,5vw,52px)] leading-[1.05] tracking-[-0.015em] text-ink">
        Lead engineer for backends and products, ten years in.
      </p>
      <p className="mt-5 text-[18px] leading-[1.6] text-body">{profile.summary}</p>
      <div className="mt-7 flex flex-wrap items-center gap-5">
        <Pill href="#">Book a 15-minute call</Pill>
        <Arrow href="#">Download CV</Arrow>
      </div>
      <p className="mt-12 font-mono text-[12.5px] text-muted">Worked with</p>
      <p className="mt-3 flex flex-wrap gap-x-7 gap-y-2 text-[17px] font-semibold text-ink/80">
        {["William Hill", "NHS England", "SalaryFinance", "Wex", "London Metal Exchange"].map((n) => (
          <span key={n}>{n}</span>
        ))}
      </p>
    </div>
  );
}

export default function Heroes() {
  return (
    <>
      <Version id="hero-a" title="Hero · A, portrait-led, black and white" source="Dribbble 27536327 (Satz) and 27385292 (Noirbyte)">
        <HeroA bw />
      </Version>
      <Version id="hero-a2" title="Hero · A2, portrait-led, colour" source="the same, with the photo in colour">
        <HeroA />
      </Version>
      <Version id="hero-b" title="Hero · B, giant surname" source="Dribbble 27488285 (Swiss portfolio, 'Nick') and 27158301 (Kolvac)">
        <HeroB />
      </Version>
      <Version id="hero-c" title="Hero · C, work in the first screen" source="Dribbble 27641632 (Alshurafa) and 27596907 (Hegia)">
        <HeroC />
      </Version>
      <Version
        id="hero-d"
        title="Hero · D, quiet CV"
        source="Dribbble 27050710 and 27063944 (Wachid, read.cv style)"
        note="'Worked with' names William Hill and Wex as the companies behind Betmate's client and Optal's acquirer; check you're happy to name them."
      >
        <HeroD />
      </Version>
    </>
  );
}
