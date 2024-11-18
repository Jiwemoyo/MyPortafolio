import React from "react";
import dataProject from '../../proyectsData'
import { ProjectsCard } from "./ProjectsCard";

export const Projects = () => {
  return (
    <div className="bg-custom-blue flex flex-col gap-6 justify-center items-center h-100 px-8 text-center text-custom-celeste text-xl font-semibold sm:text-2xl sm:w-flil sm:h-screen">
      <h2 className=" text-custom-red text-3xl">My Projects</h2>
      <p>
        Here's a selection of projects I've worked on. Each one demonstrates
        different skills and technologies.
      </p>
      <div>
        {dataProject.map( project =>{
           return <ProjectsCard key={project.id} data={project}/>
        })}
      </div>
    </div>
  );
};
