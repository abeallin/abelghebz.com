// Gallery Hero D, picked by Abel on 1 October 2026.
// Based on Dribbble 27050710 and 27063944 (Wachid, read.cv style): one quiet column, two pills, a "worked with" row.
import Image from "next/image";
import Container from "./Container.jsx";
import { Pill } from "./ui/Actions.jsx";
import BookCall from "./BookCall.jsx";
import { profile, workedWith } from "../content/profile.js";

export default function Hero() {
  return (
    <Container as="section" aria-labelledby="hero-name" className="pb-16 pt-14 sm:pb-20 sm:pt-20">
      <div className="max-w-[1080px]">
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
        <p className="mt-10 font-display max-w-[1000px] text-[clamp(40px,6.4vw,88px)] leading-[1.0] tracking-[-0.02em] text-ink">
          Lead engineer for backends and products, ten years in.
        </p>
        <p className="mt-6 max-w-[640px] text-[17.5px] leading-[1.65] text-body">{profile.summary}</p>
        <div className="mt-9 flex flex-wrap gap-3">
          <BookCall />
          <Pill href="/#experience" tone="light">
            Experience and CV
          </Pill>
        </div>
        <p className="mt-14 font-mono text-[13px] text-muted">Worked with</p>
        <ul className="mt-3 flex flex-wrap gap-x-8 gap-y-2 text-[15.5px] font-medium text-ink/75">
          {workedWith.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </div>
    </Container>
  );
}
