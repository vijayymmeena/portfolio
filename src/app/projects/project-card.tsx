import Image from "next/image";

import type { Project } from "./api";

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="flex flex-col rounded-2xl bg-[var(--article-bg)] hover:shadow hover:shadow-black">
      <Image
        src={project.image}
        height={300}
        width={600}
        alt={project.name}
        className="p-4"
      />
      <div className="space-y-2 p-4 [&>p]:mt-2 [&>p]:text-sm">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className="flex flex-wrap space-x-2 [&>span]:rounded [&>span]:bg-black [&>span]:p-1 [&>span]:text-sm">
          {project.tags.map((tag) => (
            <span key={tag} className={tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {project.source_code && (
            <a
              href={project.source_code}
              target="_blank"
              rel="noopener noreferrer"
              className="underline-effect text-sm"
            >
              Source Code
            </a>
          )}
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="underline-effect text-sm"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
