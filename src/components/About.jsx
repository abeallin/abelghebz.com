import Image from "next/image";
import Container from "./Container.jsx";
import SectionLabel from "./SectionLabel.jsx";
import { profile } from "../content/profile.js";
import { skillGroups } from "../content/skills.js";

export default function About() {
  return (
    <Container as="section" id="about" aria-labelledby="about-label" className="py-16 sm:py-20">
      <div className="grid gap-8 md:grid-cols-[160px_1fr] md:gap-6">
        <SectionLabel id="about-label">About</SectionLabel>
        <div className="grid gap-10 lg:grid-cols-[240px_1fr]">
          <Image
            src={profile.photo}
            alt={profile.name}
            width={240}
            height={240}
            className="h-auto w-[180px] rounded-2xl object-cover lg:w-[240px]"
          />
          <div>
            <p className="max-w-[620px] text-[17.5px] leading-[1.65] text-ink">
              {profile.role} based in {profile.location}. {profile.background}{" "}
              I&apos;ve worked across finance, property,
              health and gambling, from the London Metal Exchange to a game with 1 million users.
            </p>
            <dl className="mt-8 border-b border-rule">
              {skillGroups.map((g) => (
                <div key={g.label} className="grid gap-x-6 gap-y-1 border-t border-rule py-3 sm:grid-cols-[190px_1fr]">
                  <dt className="text-[15px] font-semibold text-ink">{g.label}</dt>
                  <dd className="text-[15px] text-body">{g.items.join(", ")}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </Container>
  );
}
