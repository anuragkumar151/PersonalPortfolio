import { useContext, useRef, useState, useEffect } from "react";
import { AppContext } from "../AppContext.jsx";
import { useLocation } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";

import Hero from "../components/sections/Hero.jsx";
import Projects from "../components/sections/Projects.jsx";
import Contact from "../components/sections/Contact.jsx";
import Experience from "../components/sections/Experience.jsx";
import Footer from "../components/sections/Footer.jsx";
import Skills from "../components/sections/Skills.jsx";
import Navbar from "../components/Navbar.jsx";

function Homepage() {
  const { theme, toggleTheme } = useContext(AppContext); // Access theme and toggle function
  const location = useLocation();

  // Refs for each section
  const heroRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  const [activeSection, setActiveSection] = useState("hero"); // Default to 'hero'

  useEffect(() => {
    if (window.HSStaticMethods && window.HSStaticMethods.autoInit) {
      window.HSStaticMethods.autoInit();
    }
  }, [location.pathname]);

  useEffect(() => {
    const sectionRefs = [
      { name: "hero", ref: heroRef },
      { name: "projects", ref: projectsRef },
      { name: "skills", ref: skillsRef },
      { name: "experience", ref: experienceRef },
      { name: "contact", ref: contactRef },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visibleSection) return;
        const matched = sectionRefs.find(
          (section) => section.ref.current === visibleSection.target
        );
        if (matched) {
          setActiveSection(matched.name);
        }
      },
      { rootMargin: "-30% 0px -45% 0px", threshold: [0.25, 0.5, 0.75] }
    );

    sectionRefs.forEach(({ ref }) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  // Scroll function
  const scrollToSection = (section) => {
    const navbarHeight = 68; // Height of the navbar
    const offset = navbarHeight + 20; // Add some extra padding

    if (section === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveSection("hero");
    } else if (section === "projects") {
      const element = projectsRef.current;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      setActiveSection("projects");
    } else if (section === "skills") {
      const element = skillsRef.current;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      setActiveSection("skills");
    } else if (section === "contact") {
      const element = contactRef.current;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      setActiveSection("contact");
    } else if (section === "experience") {
      const element = experienceRef.current;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      setActiveSection("experience");
    }
  };

  return (
    <div
      className={`${
        theme === "dark" ? "bg-zinc-100 dark:bg-zinc-900" : "bg-white dark:bg-white"
      }`}
    >
      <div className="dynamic-bg"></div>
      {/* Theme Toggle Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          toggleTheme();
        }}
        className="theme-toggle"
        aria-label="Toggle theme"
      >
        {theme === "dark" ? (
          <FaSun className="theme-toggle-icon theme-toggle-icon-sun" />
        ) : (
          <FaMoon className="theme-toggle-icon theme-toggle-icon-moon" />
        )}
      </button>

      <Navbar active={activeSection} scrollToSection={scrollToSection} />

      <div className="w-full min-h-screen bg-white/90 dark:bg-zinc-950/95 backdrop-blur-md relative pt-17">
        <section ref={heroRef}>
          <Hero />
        </section>
        <section ref={projectsRef}>
          <Projects />
        </section>
        <section ref={skillsRef}>
          <Skills />
        </section>
        <section ref={experienceRef}>
          <Experience />
        </section>
        <section ref={contactRef}>
          <Contact />
        </section>

        <hr className="mt-12 border border-zinc-300 dark:border-zinc-800" />
        <Footer theme={theme} />
      </div>
    </div>
  );
}

export default Homepage;
