import { CiLink } from "react-icons/ci";

function Project({ title, description, link, github }) {
  return (
    <div className="bg-white hover:shadow-md transition-all duration-300 p-6 rounded-xl border border-gray-200">
      {/* =========== PROJECT TITLE =========== */}
      <h3 className="font-bold text-lg text-zinc-700 mt-2 mb-2">{title}</h3>

      {/* =========== PROJECT DESCRIPTION =========== */}
      <p className="leading-7 text-zinc-500 font-light text-base mb-4">
        {description}
      </p>

      <div className="flex gap-4">
        {/* =========== PROJECT LINK =========== */}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2 items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-lg hover:bg-blue-200 transition-colors duration-200"
          >
            <CiLink className="text-2xl" />
            <span className="text-sm font-medium">Live</span>
          </a>
        )}

        {/* =========== PROJECT GITHUB =========== */}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2 items-center px-4 py-2 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition-colors duration-200"
          >
            <CiLink className="text-2xl" />
            <span className="text-sm font-medium">GitHub</span>
          </a>
        )}
      </div>
    </div>
  );
}

export default Project;
