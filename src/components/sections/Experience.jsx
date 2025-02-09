import user_info from "../../data/user_info.js";
import { FaBuildingUser } from "react-icons/fa6";

function Experience() {
  return (
    <section id="experience" className="mt-20 mx-4 lg:mx-20">
      {/* =========== EXPERIENCE TITLE =========== */}
      <h4
        className="text-2xl font-bold flex gap-3 items-center justify-center mb-8 
        text-zinc-800 dark:text-white"
      >
        <FaBuildingUser className="text-3xl text-teal-800 dark:text-teal-500" />
        <span className="uppercase tracking-wider">EXPERIENCE</span>
      </h4>

      <div className="md:h-[480px] md:overflow-y-scroll scroll-smooth flex justify-center">
        {/* =========== EXPERIENCE LIST =========== */}
        <div className="w-full max-w-4xl">
          {user_info.experience.map((exp, index) => {
            return (
              <div key={index} className="mb-8">
                <div className="ps-2 my-2 first:mt-0">
                  <h3 className="text-xs font-medium uppercase text-zinc-500 dark:text-zinc-400 tracking-widest">
                    {exp.duration}
                  </h3>
                </div>

                <div className="flex gap-x-4 relative group rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-zinc-800 transition duration-300 shadow-md">
                  <div className="relative">
                    <div className="relative z-10 size-7 flex justify-center items-center">
                      <div className="size-2 rounded-full bg-white border-2 border-zinc-300 group-hover:border-teal-600 dark:bg-zinc-800 dark:border-zinc-600 dark:group-hover:border-teal-400"></div>
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
