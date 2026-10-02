import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "../../../src/components/Nav.jsx";
import Footer from "../../../src/components/Footer.jsx";
import Container from "../../../src/components/Container.jsx";
import FactsRow from "../../../src/components/FactsRow.jsx";
import StackChips from "../../../src/components/StackChips.jsx";
import StatStrip from "../../../src/components/StatStrip.jsx";
import BookCall from "../../../src/components/BookCall.jsx";
import FlowStrip from "../../../src/components/FlowStrip.jsx";
import CaseNav from "../../../src/components/CaseNav.jsx";
import { Pill } from "../../../src/components/ui/Actions.jsx";
import ScreenGallery from "../../../src/components/ScreenGallery.jsx";
import { projects, projectBySlug, nextProject } from "../../../src/content/projects.js";
import { seo } from "../../../src/content/seo.js";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = seo.pages[`/work/${slug}`];
  if (!page) return {};
  return { title: page.title, description: page.description, alternates: { canonical: `/work/${slug}` } };
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="grid scroll-mt-6 gap-3 border-t border-rule py-8 md:grid-cols-[220px_1fr] md:gap-8">
      <h2 className="font-display text-[26px] leading-[1.15] text-ink">{title}</h2>
      <div className="max-w-[700px] text-[16px] leading-[1.65] text-body">{children}</div>
    </section>
  );
}

export default async function CaseStudy({ params }) {
  const { slug } = await params;
  const p = projectBySlug(slug);
  if (!p) notFound();
  const next = nextProject(slug);

  return (
    <>
      <Nav />
      <main id="main" className="pb-16">
        <Container className="pt-12 sm:pt-16">
          <p className="mb-5 font-mono text-[13px] text-muted">
            <Link href="/#work" className="text-ink hover:text-accent-ink">
              Work
            </Link>{" "}
            / {p.name}
          </p>
          <p className="mb-2 text-[14px] font-medium text-accent-ink">{p.eyebrow}</p>
          <h1 className="max-w-[920px] font-display text-[clamp(36px,5.6vw,60px)] font-normal leading-[1.04] tracking-[-0.015em] text-ink">
            {p.headline}
          </h1>
          <p className="mt-5 max-w-[720px] text-[17.5px] leading-[1.6] text-body">{p.summary}</p>
          <StatStrip stats={p.stats} />
          <div className="mt-8">
            <FactsRow facts={p.facts} live={p.live} size="lg" />
          </div>
        </Container>

        <Container className="mt-10 xl:grid xl:grid-cols-[minmax(0,1fr)_200px] xl:gap-12">
          <div className="min-w-0">
          {p.flow && <FlowStrip flow={p.flow} screens={p.screens} />}
          <section id="screens" aria-labelledby="screens-title" className="scroll-mt-6 border-t border-rule py-8">
            <h2 id="screens-title" className="mb-5 font-display text-[26px] leading-[1.15] text-ink">
              Screens
            </h2>
            <div className="rounded-2xl bg-tile p-5 sm:p-6">
              <ScreenGallery screens={p.screens} name={p.name} />
            </div>
          </section>
          <Section id="problem" title="The problem">
            <p>{p.problem}</p>
          </Section>
          <Section id="built" title="What I built">
            <div className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {p.built.map((b) => (
                <p key={b.lead}>
                  <span className="font-semibold text-ink">{b.lead}</span> {b.text}
                </p>
              ))}
            </div>
            <StackChips items={p.stack} tone="tile" className="mt-5" />
          </Section>
          <Section id="result" title="The result">
            <p>{p.result}</p>
          </Section>
          </div>
          <aside className="hidden xl:block">
            <CaseNav
              items={[
                ...(p.flow ? [{ id: "flow", label: "How it works" }] : []),
                { id: "screens", label: "Screens" },
                { id: "problem", label: "The problem" },
                { id: "built", label: "What I built" },
                { id: "result", label: "The result" },
              ]}
            />
          </aside>
        </Container>

        <Container>
          <div className="mt-6 flex flex-wrap items-baseline justify-between gap-4 border-t border-rule pt-6">
            <div className="flex flex-wrap items-center gap-4">
              <p className="text-[16px] text-body">Have something similar to build?</p>
              <BookCall />
            </div>
            <Link href={`/work/${next.slug}`} className="group max-w-full rounded-2xl border border-rule px-6 py-4 transition-colors hover:border-ink sm:text-right">
              <span className="block font-mono text-[13px] text-muted">Next project</span>
              <span className="font-display text-[22px] text-ink [overflow-wrap:anywhere] group-hover:text-accent-ink sm:text-[28px]">
                {next.name} <span aria-hidden="true">→</span>
              </span>
            </Link>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
