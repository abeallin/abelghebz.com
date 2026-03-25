import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import ParticleCanvas from "./components/Hero/ParticleCanvas";
import About from "./components/About/About";
import Experience from "./components/experience/Experience";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <>
      <ParticleCanvas />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Footer />
    </>
  );
}
