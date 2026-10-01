import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "../../../src/components/Nav.jsx";
import Footer from "../../../src/components/Footer.jsx";
import Container from "../../../src/components/Container.jsx";
import FactsRow from "../../../src/components/FactsRow.jsx";
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

function Section({ title, children }) {
  return (
    <section className="grid gap-3 border-t border-rule py-8 md:grid-cols-[220px_1fr] md:gap-8">
      <h2 className="font-display text-[26px] leading-[1.15] text-ink">{title}</h2>
      <div className="max-w-[700px] text-[17px] leading-[1.65] text-body">{children}</div>
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
            <Link href="/#work" className="underline decoration-rule underline-offset-4 hover:decoration-accent">
              Work
            </Link>{" "}
            / {p.name}
          </p>
          <p className="mb-2 text-[14px] font-medium text-accent-ink">{p.eyebrow}</p>
          <h1 className="max-w-[920px] font-display text-[clamp(36px,5.6vw,60px)] font-normal leading-[1.04] tracking-[-0.015em] text-ink">
            {p.headline}
          </h1>
          <p className="mb-8 mt-5 max-w-[720px] text-[19px] leading-[1.55] text-body">{p.summary}</p>
          <FactsRow facts={p.facts} live={p.live} size="lg" />
        </Container>

        <div className="mt-10 bg-tile py-8">
          <Container>
            <ScreenGallery screens={p.screens} name={p.name} />
          </Container>
        </div>

        <Container className="mt-6">
          <Section title="The problem">
            <p>{p.problem}</p>
          </Section>
          <Section title="What I built">
            <div className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {p.built.map((b) => (
                <p key={b.lead}>
                  <span className="font-semibold text-ink">{b.lead}</span> {b.text}
                </p>
              ))}
            </div>
            <p className="mt-4 font-mono text-[13px] text-muted">{p.stack.join(" / ")}</p>
          </Section>
          <Section title="The result">
            <p>{p.result}</p>
          </Section>

          <div className="mt-6 flex flex-wrap items-baseline justify-between gap-4 border-t border-rule pt-6">
            <Link href="/#contact" className="link-underline text-[17px] font-medium text-ink">
              Have something similar to build? Book a call
            </Link>
            <Link href={`/work/${next.slug}`} className="group sm:text-right">
              <span className="block font-mono text-[13px] text-muted">Next project</span>
              <span className="font-display text-[28px] text-ink underline decoration-accent decoration-[1.5px] underline-offset-4">
                {next.name}
              </span>
            </Link>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
