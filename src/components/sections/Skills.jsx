import {
  FaJava,
  FaReact,
  FaAws,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaMicrosoft,
  FaCogs,
} from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiMysql, SiPostman, SiGit } from "react-icons/si";
import { useContext } from "react";
import { AppContext } from "../../AppContext.jsx";

function Skills() {
  const { theme } = useContext(AppContext); // Access theme from context
  const skills = [
    {
      name: "Java",
      Icon: FaJava,
      className: "text-yellow-600 dark:text-yellow-300",
    },
    {
      name: "Spring Boot",
      image: "/SpringBoot.png",
      className: "text-green-600 dark:text-green-300",
    },
    {
      name: "MySQL",
      Icon: SiMysql,
      className: "text-sky-600 dark:text-sky-300",
    },
    {
      name: "MongoDB",
      Icon: DiMongodb,
      className: "text-green-600 dark:text-green-300",
    },
    {
      name: "React",
      Icon: FaReact,
      className: "text-cyan-500 dark:text-cyan-300",
    },
    {
      name: "JavaScript",
      Icon: FaJs,
      className: "text-yellow-500 dark:text-yellow-300",
    },
    {
      name: "HTML",
      Icon: FaHtml5,
      className: "text-orange-600 dark:text-orange-300",
    },
    {
      name: "CSS",
      Icon: FaCss3Alt,
      className: "text-blue-600 dark:text-blue-300",
    },
    {
      name: "AWS",
      Icon: FaAws,
      className: "text-amber-500 dark:text-amber-300",
    },
    {
      name: "Azure",
      Icon: FaMicrosoft,
      className: "text-blue-600 dark:text-blue-300",
    },
    {
      name: "Git",
      Icon: SiGit,
      className: "text-red-600 dark:text-red-300",
    },
    {
      name: "Postman",
      Icon: SiPostman,
      className: "text-orange-600 dark:text-orange-300",
    },
  ];

  return (
    <section id="skills" className="skills-section mt-20 px-6 lg:px-24 pt-24">
      <div className="skills-shell">
      <div className="skills-header fade-up">
        <h4
          className={`text-4xl font-bold flex gap-3 items-center justify-center mb-12 ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}
        >
          <FaCogs className="text-blue-800" />
          SKILLSET
        </h4>
      </div>

        <div className="skills-grid">
          {skills.map((skill, index) => {
            const Icon = skill.Icon;

            return (
              <span
                key={skill.name}
                title={skill.name}
                className="skill-item fade-up"
                style={{
                  animationDelay: `${index * 65}ms`,
                }}
              >
                <span className="skill-icon-wrap">
                  {Icon ? (
                    <Icon className={`skill-icon ${skill.className}`} />
                  ) : (
                    <img
                      src={skill.image}
                      alt={skill.name}
                      className="skill-icon skill-image"
                    />
                  )}
                </span>
                <span className="skill-name">{skill.name}</span>
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
