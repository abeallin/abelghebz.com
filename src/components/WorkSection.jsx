import Container from "./Container.jsx";
import SectionLabel from "./SectionLabel.jsx";
import ProjectTile from "./ProjectTile.jsx";
import { projects } from "../content/projects.js";

// Filter tabs (All / Mobile / Web / Backend) are only worth showing from five projects; there are three (spec §3).
export default function WorkSection() {
  return (
    <Container as="section" id="work" aria-labelledby="work-label" className="py-16 sm:py-20">
      <div className="grid gap-8 md:grid-cols-[160px_1fr] md:gap-6">
        <SectionLabel id="work-label">Selected work</SectionLabel>
        <div className="space-y-16">
          {projects.map((p) => (
            <ProjectTile key={p.slug} project={p} />
          ))}
        </div>
      </div>
    </Container>
  );
}
