import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectSection from "./components/ProjectSection";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import { useRef } from "react";
import AboutSection from "./components/AboutSection";
import { Routes, Route } from "react-router-dom";
const App = () => {

  const heroRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToHero = () => {
    heroRef.current?.scrollIntoView({ behavior: 'smooth' });
  }

  const scrollToProject = () => {
    projectRef.current?.scrollIntoView({ behavior: 'smooth' });
  }

  const scrollToSkills = () => {
    skillsRef.current?.scrollIntoView({ behavior: 'smooth' });
  }

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <Navbar scrollToHero={scrollToHero} scrollToProject={scrollToProject} scrollToSkills={scrollToSkills} scrollToContact={scrollToContact} />

      <Routes>

        <Route path="/" element={
          <>
            <div ref={heroRef}>
              <Hero scrollToContact={scrollToContact} />
            </div>
            <div ref={projectRef}>
              <ProjectSection />
            </div>
            <div ref={skillsRef}>
              <SkillsSection />
            </div>
            <div ref={contactRef}>
              <ContactSection />
            </div>
            <div>
              <Footer />
            </div>
          </>
        } />

        <Route path="/about" element={<AboutSection />} />
      </Routes>
    </>
  )
}

export default App