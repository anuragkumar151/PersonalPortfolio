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
            <h1 className="font-black mt-3 text-5xl lg:w-[85%]">
              {user_info.main.name}
            </h1>
            <h2 className="text-xl mt-2">{user_info.main.role}</h2>

            <p className="mt-6 dark:text-zinc-300 text-base font-light lg:w-[87%] leading-7">
              {user_info.main.description}
            </p>

            <div className="flex gap-2 mt-6">
              <a
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-black hover:bg-red-800 hover:text-white hover:border-red-800 dark:border-white font-medium transition-all duration-300"
              >
                Resume
              </a>
            </div>
          </div>

          {/* Unique Hexagonal Profile Picture */}
          <div className="hidden lg:flex justify-center items-center w-[240px] self-center">
            <div className="relative w-[220px] h-[220px] flex justify-center items-center">
              {/* Hexagon Border */}
              <div className="absolute w-full h-full bg-gradient-to-r from-red-500 to-purple-600 rounded-[20%] transform rotate-6 shadow-lg"></div>

              {/* Profile Picture in Hexagon */}
              <div className="relative w-[200px] h-[220px] overflow-hidden clip-hexagon border-4 border-white shadow-2xl transform hover:scale-105 hover:rotate-3 transition-all duration-500">
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
