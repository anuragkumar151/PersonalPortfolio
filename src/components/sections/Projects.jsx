import info from "../../data/user_info.js";
import { FaProjectDiagram, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { useContext } from "react";
import { AppContext } from "../../AppContext.jsx";

function Projects() {
  const { theme } = useContext(AppContext); // Access theme from context
  const fallbackImage = "public/default_project.png"; // Fallback image if no image is provided
  const getTechStack = (technologies) =>
    technologies
      .split(",")
      .map((technology) => technology.trim())
      .filter(Boolean);

  return (
    <section id="projects" className="mt-2 mx-4 lg:mx-16 pt-20">
      {/* =========== PROJECTS TITLE =========== */}
      <h4
        className={`text-4xl font-bold flex gap-3 items-center justify-center mb-12 ${
          theme === "dark" ? "text-white" : "text-gray-900"
        }`}
      >
        <FaProjectDiagram className="text-blue-800" />
        PROJECTS
      </h4>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {info.projects.map((project, index) => (
          <article
            key={index}
            className="fade-up group project-card h-full flex flex-col rounded-2xl bg-white/90 dark:bg-zinc-900/80 border border-white/70 dark:border-zinc-800 overflow-hidden backdrop-blur-sm"
            style={{ animationDelay: `${index * 120}ms` }}
          >
            {/* Project Image */}
            <div className="project-image-container">
              <img
                src={project.image || fallbackImage}
                alt={`${project.title} screenshot`}
                loading="lazy"
                decoding="async"
                className="transition-all duration-500 group-hover:scale-105"
              />
            </div>

            {/* Project Content */}
            <div className="p-6 flex flex-col flex-1 relative">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-700 dark:group-hover:text-sky-300 transition-all min-h-[56px]">
                {project.title}
              </h3>

              <p className="text-sm text-gray-600 dark:text-zinc-300 mt-2 leading-relaxed min-h-[96px]">
                {project.description}
              </p>
              <div className="project-tech mt-4">
                {getTechStack(project.technologies).map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              {/* Buttons for Live Demo and GitHub */}
              <div className="mt-auto pt-5 flex gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-action project-action-dark flex-1 flex items-center justify-center gap-2 px-3 py-2.5 text-sm font-semibold rounded-xl transition-all"
                  >
                    <FaGithub /> GitHub
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-action project-action-primary flex-1 flex items-center justify-center gap-2 px-3 py-2.5 text-sm font-semibold rounded-xl transition-all"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
