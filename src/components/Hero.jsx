// Based on Dribbble 24892401 (Elizaveta Breneva: serif name) and 27050710 (Wachid: read.cv-style CV).
import Container from "./Container.jsx";
import SocialRow from "./SocialRow.jsx";
import { profile, paths } from "../content/profile.js";

export default function Hero() {
  return (
    <Container as="section" aria-labelledby="hero-name" className="pb-16 pt-16 sm:pt-24">
      <p className="mb-4 font-mono text-[13px] text-muted">
        {profile.role} · {profile.location}
      </p>
      <h1
        id="hero-name"
        className="font-display text-[clamp(52px,10.5vw,116px)] font-normal leading-[0.92] tracking-[-0.02em] text-ink"
      >
        <span className="block">Abel</span>{" "}
        <span className="block break-words">Ghebrezadik</span>
      </h1>
      <p className="mt-7 max-w-[600px] text-[19px] leading-[1.55] text-body">{profile.summary}</p>
      <div className="mt-10 grid border-y border-rule sm:grid-cols-2">
        {paths.map((p, i) => (
          <div key={p.href} className={`py-5 ${i === 1 ? "border-t border-rule sm:border-l sm:border-t-0 sm:pl-6" : "sm:pr-6"}`}>
            <p className="mb-1 text-[14px] text-muted">{p.prompt}</p>
            <a href={p.href} className="link-underline text-[18px] font-medium text-ink">
              {p.label}
            </a>
          </div>
        ))}
      </div>
      <SocialRow className="mt-6" />
    </Container>
  );
}
