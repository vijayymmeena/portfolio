import { GetProjects } from "./api";
import ProjectCard from "./project-card";

const ProjectsPage: React.FC = () => {
  const projects = GetProjects();

  return (
    <>
      <h3>{"Stuff I've Built So Far"}</h3>
      <div className="my-6 grid gap-6 md:grid-cols-[repeat(auto-fit,minmax(400px,1fr))]">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
};

export default ProjectsPage;
