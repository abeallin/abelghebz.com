import Nav from "../src/components/Nav.jsx";
import Hero from "../src/components/Hero.jsx";
import WorkSection from "../src/components/WorkSection.jsx";
import ExperienceList from "../src/components/ExperienceList.jsx";
import About from "../src/components/About.jsx";
import Contact from "../src/components/Contact.jsx";
import Footer from "../src/components/Footer.jsx";
import { profile } from "../src/content/profile.js";
import { seo } from "../src/content/seo.js";

export const metadata = { alternates: { canonical: "/" } };

const person = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  url: seo.site,
  email: `mailto:${profile.email}`,
  address: { "@type": "PostalAddress", addressLocality: profile.location, addressCountry: "GB" },
  sameAs: profile.social.map((s) => s.url),
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }} />
      <Nav />
      <main id="main">
        <Hero />
        <WorkSection />
        <ExperienceList />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
