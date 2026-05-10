import user_info from "../../data/user_info.js";

function Hero() {
  return (
    <section id="hero" className="pb-28 pt-24 sm:pt-28 md:pt-44 flex px-6 lg:px-24">
      <div className="self-center">
        {/* Mobile Profile Picture */}
        <div className="w-20">
          <img
            src={user_info.main.photo}
            className="rounded-full mb-6 lg:hidden border-2 border-gray-300 shadow-md"
            alt="Profile Picture"
          />
        </div>

        <div className="flex gap-2 align-center flex-wrap md:flex-nowrap">
          <div className="lg:w-[80%] text-zinc-900 dark:text-zinc-100 self-center">
            <p className="fade-up inline-flex px-3 py-1 rounded-full text-xs tracking-widest uppercase bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300">
              Building Scalable Digital Products
            </p>
            <h1 className="fade-up font-black mt-3 text-5xl lg:w-[85%] bg-gradient-to-r from-slate-900 via-indigo-700 to-sky-600 dark:from-white dark:via-indigo-300 dark:to-sky-300 bg-clip-text text-transparent">
              {user_info.main.name}
            </h1>
            <h2 className="fade-up text-xl mt-2">{user_info.main.role}</h2>

            <p className="fade-up mt-6 dark:text-zinc-300 text-base font-light lg:w-[87%] leading-7">
              {user_info.main.description}
            </p>

            <div className="fade-up flex gap-3 mt-6">
              <a
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-indigo-600 text-indigo-700 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 dark:border-indigo-300 dark:text-indigo-300 dark:hover:bg-indigo-400 dark:hover:text-zinc-950 font-medium rounded-lg transition-all duration-300"
              >
                Resume
              </a>
              <a
                href="#projects"
                className="px-6 py-3 border border-zinc-400 hover:border-zinc-700 dark:hover:border-zinc-100 rounded-lg font-medium transition-all duration-300"
              >
                View Projects
              </a>
            </div>

            <div className="fade-up mt-8 flex flex-wrap gap-3">
              <span className="px-3 py-1 rounded-full text-sm bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300">
                3+ Years Experience
              </span>
              <span className="px-3 py-1 rounded-full text-sm bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300">
                Java + Spring Boot
              </span>
            </div>
          </div>

          {/* Profile Picture */}
          <div className="hidden lg:flex justify-center items-center w-[240px] self-center fade-up">
            <div className="relative w-[230px] h-[260px] flex justify-center items-center">
              <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-indigo-500/20 to-sky-400/30 blur-md"></div>
              <div className="relative w-[215px] h-[245px] overflow-hidden rounded-[24px] border-4 border-white/80 dark:border-zinc-800 shadow-2xl transform hover:scale-105 transition-all duration-500">
                <img
                  className="w-full h-full object-cover"
                  src={user_info.main.photo}
                  alt="Profile Picture"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
