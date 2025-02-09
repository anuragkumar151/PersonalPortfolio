import info from "../../data/user_info.js";
import { FaProjectDiagram, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { useContext } from "react";
import { AppContext } from "../../App.jsx";

function Projects() {
  const { theme } = useContext(AppContext); // Access theme from context
  const fallbackImage = "public/default_project.png"; // Fallback image if no image is provided

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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {info.projects.map((project, index) => (
          <div
            key={index}
            className="group project-card transform transition-all duration-300 hover:scale-[1.05] hover:shadow-2xl rounded-xl bg-white shadow-md border border-gray-200 overflow-hidden"
          >
            {/* Project Image */}
            <div className="relative w-full h-56">
              <img
                src={project.image || fallbackImage}
                alt={project.title}
                className="w-full h-full object-cover transition-all duration-300 group-hover:opacity-90"
              />
            </div>

            {/* Project Content */}
            <div className="p-6 flex flex-col justify-between flex-grow">
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-700 transition-all">
                {project.title}
              </h3>

              {/* Project Description & Tech Stack (Single Line) */}
              <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                {project.description}{" "}
                <span className="block mt-1 text-xs text-gray-500 italic">
                  <strong>Tech:</strong> {project.technologies}
                </span>
              </p>

              {/* Buttons for Live Demo and GitHub */}
              <div className="mt-4 flex gap-3">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-all"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gray-800 hover:bg-gray-900 rounded-lg transition-all"
                  >
                    <FaGithub /> GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
