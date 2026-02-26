import React from "react";
import { PROJECTS_DATA } from "../constants/projects";
import { ProjectsCard } from "../components/common/ProjectsCard";
import { useTranslation } from "react-i18next";

export const Projects = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-cyber-black min-h-screen px-4 py-12 md:px-8 w-full grid-bg relative overflow-hidden">
      {/* Decoración */}
      <div className="absolute top-10 right-10 w-40 h-40 border-2 border-cyber-magenta opacity-10 transform rotate-45"></div>

      {/* Header */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <div className="inline-block mb-4 px-4 py-2 border-2 border-cyber-cyan">
          <span className="glow-text font-bold">&gt; PROYECTOS</span>
        </div>
        <h2 className="glow-text text-4xl md:text-6xl font-black mb-6 tracking-wider">
          {t('Proyects-title')}
        </h2>
        <p className="text-cyber-white text-base md:text-lg px-4 border-l-4 border-cyber-magenta pl-4">
          {t('Proyects-presentation')}
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto auto-rows-[300px] md:auto-rows-[350px]">
        {PROJECTS_DATA.map((project) => (
          <ProjectsCard key={project.id} data={project} />
        ))}
      </div>
    </div>
  );
};
