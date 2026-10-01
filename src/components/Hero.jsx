// Gallery Hero D, picked by Abel on 1 October 2026.
// Based on Dribbble 27050710 and 27063944 (Wachid, read.cv style): one quiet column, two pills, a "worked with" row.
import Image from "next/image";
import Container from "./Container.jsx";
import { Pill } from "./ui/Actions.jsx";
import { profile, workedWith } from "../content/profile.js";

export default function Hero() {
  return (
    <Container as="section" aria-labelledby="hero-name" className="pb-16 pt-14 sm:pb-20 sm:pt-20">
      <div className="max-w-[780px]">
        <div className="flex items-center gap-4">
          <div className="relative size-16 shrink-0 overflow-hidden rounded-full bg-tile">
            <Image src={profile.photo} alt="" fill sizes="64px" className="object-cover" priority />
          </div>
          <div>
            <h1 id="hero-name" className="text-[18px] font-semibold text-ink">
              {profile.name}
            </h1>
            <p className="text-[15px] text-body">
              {profile.role} · {profile.location}
            </p>
          </div>
        </div>
        <p className="mt-10 font-display text-[clamp(40px,6.4vw,72px)] leading-[1.02] tracking-[-0.02em] text-ink">
          Lead engineer for backends and products, ten years in.
        </p>
        <p className="mt-6 max-w-[640px] text-[19px] leading-[1.6] text-body">{profile.summary}</p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Pill href="/#contact">Book a 15-minute call</Pill>
          <Pill href="/#experience" tone="light">
            Experience and CV
          </Pill>
        </div>
        <p className="mt-14 font-mono text-[13px] text-muted">Worked with</p>
        <ul className="mt-3 flex flex-wrap gap-x-8 gap-y-2 text-[18px] font-semibold text-ink/80">
          {workedWith.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </div>
    </Container>
  );
}
