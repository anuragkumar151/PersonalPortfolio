import { useContext, useRef, useState, useEffect } from "react";
import { AppContext } from "../App.jsx";
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
  const contactRef = useRef(null);

  const [activeSection, setActiveSection] = useState("hero"); // Default to 'hero'

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);

  // Scroll function
  const scrollToSection = (section) => {
    if (section === "hero") {
      heroRef.current.scrollIntoView({ behavior: "smooth" });
      setActiveSection("hero");
    } else if (section === "projects") {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
      setActiveSection("projects");
    } else if (section === "skills") {
      skillsRef.current.scrollIntoView({ behavior: "smooth" });
      setActiveSection("skills");
    } else if (section === "contact") {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
      setActiveSection("contact");
    }
  };

  return (
    <div
      className={`${
        theme === "dark" ? "bg-zinc-100 dark:bg-zinc-900" : "bg-white dark:bg-white"
      }`}
    >
      <div className="xl:w-[1200px] md:mx-auto h-full border-x border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-950">
        {/* Theme Toggle Button */}
        <button
  onClick={(e) => {
    e.stopPropagation(); // Prevent event propagation
    toggleTheme();
  }}
  className={`fixed top-4 right-4 md:right-12 flex items-center justify-center bg-gray-800 text-white p-2 rounded-full shadow-lg transition-transform transform hover:scale-110`}
  style={{ zIndex: 50 }} // Ensure it's above all elements
>
  {theme === "dark" ? (
    <FaSun className="text-yellow-400 text-xl" /> // Reduced size
  ) : (
    <FaMoon className="text-blue-500 text-xl" /> // Reduced size
  )}
</button>


        <Navbar active={activeSection} scrollToSection={scrollToSection} />
        <section ref={heroRef}>
          <Hero />
        </section>
        <section ref={projectsRef}>
          <Projects />
        </section>
        <section ref={skillsRef}>
          <Skills />
        </section>
        <section>
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
