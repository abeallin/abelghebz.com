import Nav from "../src/components/Nav.jsx";
import Hero from "../src/components/Hero.jsx";
import WorkSection from "../src/components/WorkSection.jsx";
import ExperienceList from "../src/components/ExperienceList.jsx";
import About from "../src/components/About.jsx";
import Footer from "../src/components/Footer.jsx";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <WorkSection />
        <ExperienceList />
        <About />
      </main>
      <Footer />
    </>
  );
}
