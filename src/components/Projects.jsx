import React from "react";
import dataProject from '../../proyectsData'
import { ProjectsCard } from "./ProjectsCard";

export const Projects = () => {
  return (
<div className="bg-custom-blue flex flex-col gap-6 justify-center items-center h-100 px-8 text-center text-custom-celeste text-xl font-semibold sm:text-2xl sm:w-screen sm:py-40">
      <h2 className="text-custom-red text-3xl lg:text-4xl">My Projects</h2>
      <p className="max-w-2xl">
        Here's a selection of projects I've worked on. Each one demonstrates different skills and technologies.
      </p>
      {/* Grid layout for larger screens */}
      <div className=" flex flex-col items-center justify-center sm:flex-row flex-wrap gap-9">
        {dataProject.map((project) => (
          <ProjectsCard key={project.id} data={project} />
        ))}
      </div>
    </div>
  );
};
