import user_info from "../../data/user_info.js";
import { FaBuildingUser } from "react-icons/fa6";

function Experience() {
  return (
    <section id="experience" className="mt-20 mx-4 lg:mx-20">
      {/* =========== EXPERIENCE TITLE =========== */}
      <h4
        className="fade-up text-3xl font-bold flex gap-3 items-center justify-center mb-8 
        text-zinc-800 dark:text-white"
      >
        <FaBuildingUser className="text-3xl text-teal-800 dark:text-teal-500" />
        <span className="uppercase tracking-wider">EXPERIENCE</span>
      </h4>

      <div className="fade-up flex items-center justify-center gap-3 mb-8 flex-wrap">
        <span className="px-3 py-1 rounded-full text-sm bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300">
          3+ Years Experience
        </span>
        <span className="px-3 py-1 rounded-full text-sm bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300">
          Spring Boot + Microservices
        </span>
        <span className="px-3 py-1 rounded-full text-sm bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
          Java + Cloud + CI/CD
        </span>
      </div>

      <div className="md:h-[520px] md:overflow-y-scroll scroll-smooth flex justify-center pr-2">
        {/* =========== EXPERIENCE LIST =========== */}
        <div className="w-full max-w-4xl border-l-2 border-indigo-300/60 dark:border-indigo-700/70 pl-5">
          {user_info.experience.map((exp, index) => {
            return (
              <div key={index} className="mb-8 fade-up" style={{ animationDelay: `${index * 140}ms` }}>
                <div className="ps-2 my-2 first:mt-0">
                  <h3 className="text-xs font-medium uppercase text-zinc-500 dark:text-zinc-400 tracking-widest">
                    {exp.duration}
                  </h3>
                </div>

                <div className="flex gap-x-4 relative group rounded-xl p-5 hover:bg-gray-50 dark:hover:bg-zinc-800 transition duration-300 shadow-md border border-zinc-200 dark:border-zinc-700 bg-white/80 dark:bg-zinc-900/60 backdrop-blur-sm hover:shadow-indigo-200/60 dark:hover:shadow-indigo-900/30">
                  <div className="relative">
                    <div className="relative z-10 size-7 flex justify-center items-center">
                      <div className="size-3 rounded-full bg-white border-2 border-indigo-400 group-hover:border-indigo-600 dark:bg-zinc-800 dark:border-indigo-500 dark:group-hover:border-indigo-300"></div>
                    </div>
                  </div>

                  <div className="grow">
                    {/* =========== COMPANY NAME =========== */}
                    <h3 className="flex items-center gap-x-3 font-semibold text-zinc-800 dark:text-white">
                      <div className="relative">
                        <img
                          className="w-8 h-8 rounded-full shadow-lg group-hover:scale-105 transition-transform duration-300 ease-in-out"
                          src={exp.image}
                          alt="Company Logo"
                        />
                        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-500 to-teal-800 opacity-20"></span>
                      </div>
                      <div className="leading-5">
                        {exp.company}
                        {/* =========== POSITION =========== */}
                        <p className="font-normal text-xs text-zinc-600 dark:text-zinc-400">
                          {exp.position}
                        </p>
                      </div>
                    </h3>

                    <ul className="list-disc list-inside text-zinc-800 dark:text-white mt-4 space-y-2">
                      {/* =========== DESCRIPTION LIST =========== */}
                      {exp.descriptions.map((desc, index) => {
                        return (
                          <li className="flex items-start space-x-3" key={index}>
                            <svg
                              className="flex-shrink-0 size-4 text-teal-800 dark:text-teal-500"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            <span className="text-sm text-zinc-600 dark:text-zinc-300">
                              {desc}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Experience;
