import { ArrowUpRight, PlayCircle } from "@phosphor-icons/react/dist/ssr";
import { projects } from "@/data/projects";

const TAG_COLORS = [
  "bg-orange-100 text-orange-900",
  "bg-blue-100 text-blue-900",
  "bg-purple-100 text-purple-900",
];

function ProjectCard({ project }) {
  return (
    <div className="flex flex-col gap-3 border bg-white border-gray-300 shadow-md rounded-xl p-5">
      <h3 className="text-[16px] md:text-[18px] font-bold">{project.title}</h3>
      <p className="text-[14px] md:text-[15px] text-[#364153]">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag, i) => (
          <span
            key={tag}
            className={`${TAG_COLORS[i % TAG_COLORS.length]} rounded px-1.5 py-0.5 text-xs font-semibold`}
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-2 mt-1">
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 rounded-full border border-gray-300 text-gray-700 text-[13px] font-semibold px-3.5 py-1.5 hover:bg-gray-100 transition-colors"
        >
          <PlayCircle size={15} weight="bold" />
          Walkthrough
        </a>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-1.5 rounded-full bg-gray-900 text-white text-[13px] font-semibold px-3.5 py-1.5 hover:bg-gray-800 transition-colors"
        >
          Try it live
          <ArrowUpRight
            size={14}
            className="-rotate-0 group-hover:rotate-45 transition-transform"
          />
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 md:scroll-mt-28 w-full px-6 sm:px-4 mt-12"
    >
      <div className="w-full max-w-[92vw] md:max-w-screen-md mx-auto">
        <div className="text-[16px] mt-4 md:text-[22px] font-semibold text-gray-800 text-center md:text-left mb-6">
          Projects
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.url} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
