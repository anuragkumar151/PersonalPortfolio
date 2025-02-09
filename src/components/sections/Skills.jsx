import React from "react";
import {
  FaJava,
  FaReact,
  FaAws,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaMicrosoft,
} from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiMysql, SiPostman, SiGit } from "react-icons/si";
import { FaCogs } from "react-icons/fa";

function Skills() {
  return (
    <section id="skills" className="mt-20 mx-4 lg:mx-20 pt-24">
      {/* =========== SKILLS TITLE =========== */}
      <h4 className="text-2xl font-semibold flex gap-2 items-center justify-center text-zinc-800 dark:text-white mb-6 transition-all duration-300">
        <FaCogs className="text-3xl text-yellow-500 dark:text-yellow-300 transition-transform group-hover:scale-110" />
        <span className="uppercase tracking-wider">Skillset</span>
      </h4>

      {/* =========== SKILLS GRID =========== */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 mt-8">
        {/* Skill Item */}
        <span className="inline-flex flex-col items-center justify-center gap-1 py-2 px-3 rounded-lg text-yellow-600 dark:text-yellow-400 transform hover:scale-110 transition-all duration-300">
          <FaJava className="text-3xl" />
          <span className="font-semibold text-sm">Java</span>
        </span>

        <span className="inline-flex flex-col items-center justify-center gap-1 py-2 px-3 rounded-lg text-green-600 dark:text-green-400 transform hover:scale-110 transition-all duration-300">
          <img
            src="/SpringBoot.png"
            alt="Spring Boot"
            className="w-10 h-10 object-contain"
          />
          <span className="font-semibold text-sm">Spring Boot</span>
        </span>

        <span className="inline-flex flex-col items-center justify-center gap-1 py-2 px-3 rounded-lg text-purple-600 dark:text-purple-400 transform hover:scale-110 transition-all duration-300">
          <SiMysql className="text-3xl" />
          <span className="font-semibold text-sm">MySQL</span>
        </span>

        <span className="inline-flex flex-col items-center justify-center gap-1 py-2 px-3 rounded-lg text-green-600 dark:text-green-400 transform hover:scale-110 transition-all duration-300">
          <DiMongodb className="text-3xl" />
          <span className="font-semibold text-sm">MongoDB</span>
        </span>

        <span className="inline-flex flex-col items-center justify-center gap-1 py-2 px-3 rounded-lg text-blue-500 dark:text-blue-400 transform hover:scale-110 transition-all duration-300">
          <FaReact className="text-3xl" />
          <span className="font-semibold text-sm">React</span>
        </span>

        <span className="inline-flex flex-col items-center justify-center gap-1 py-2 px-3 rounded-lg text-yellow-500 dark:text-yellow-400 transform hover:scale-110 transition-all duration-300">
          <FaJs className="text-3xl" />
          <span className="font-semibold text-sm">JavaScript</span>
        </span>

        <span className="inline-flex flex-col items-center justify-center gap-1 py-2 px-3 rounded-lg text-orange-600 dark:text-orange-400 transform hover:scale-110 transition-all duration-300">
          <FaHtml5 className="text-3xl" />
          <span className="font-semibold text-sm">HTML</span>
        </span>

        <span className="inline-flex flex-col items-center justify-center gap-1 py-2 px-3 rounded-lg text-blue-600 dark:text-blue-400 transform hover:scale-110 transition-all duration-300">
          <FaCss3Alt className="text-3xl" />
          <span className="font-semibold text-sm">CSS</span>
        </span>

        <span className="inline-flex flex-col items-center justify-center gap-1 py-2 px-3 rounded-lg text-yellow-500 dark:text-yellow-400 transform hover:scale-110 transition-all duration-300">
          <FaAws className="text-3xl" />
          <span className="font-semibold text-sm">AWS</span>
        </span>

        <span className="inline-flex flex-col items-center justify-center gap-1 py-2 px-3 rounded-lg text-blue-600 dark:text-blue-400 transform hover:scale-110 transition-all duration-300">
          <FaMicrosoft className="text-3xl" />
          <span className="font-semibold text-sm">Azure</span>
        </span>

        <span className="inline-flex flex-col items-center justify-center gap-1 py-2 px-3 rounded-lg text-red-600 dark:text-red-400 transform hover:scale-110 transition-all duration-300">
          <SiGit className="text-3xl" />
          <span className="font-semibold text-sm">Git</span>
        </span>

        <span className="inline-flex flex-col items-center justify-center gap-1 py-2 px-3 rounded-lg text-orange-600 dark:text-orange-400 transform hover:scale-110 transition-all duration-300">
          <SiPostman className="text-3xl" />
          <span className="font-semibold text-sm">Postman</span>
        </span>
      </div>
    </section>
  );
}

export default Skills;
