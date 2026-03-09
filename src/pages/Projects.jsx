import React from "react";
import { PROJECTS_DATA } from "../constants/projects";
import { ProjectsCard } from "../components/common/ProjectsCard";
import { useTranslation } from "react-i18next";

export const Projects = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-[calc(100vh-4rem)] p-4 lg:p-8 w-full relative">

      {/* Header Poster Block */}
      <div className="brutal-box bg-white p-6 md:p-10 mb-8 border-4 border-ik-dark relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-ik-dark opacity-5 rounded-bl-[100px] pointer-events-none"></div>
        <div className="inline-block bg-ik-dark text-ik-light font-pixel text-xl px-4 py-1 mb-4">
          DATABASE: ACTIVE
        </div>
        <h2 className="text-ik-dark font-display uppercase text-5xl md:text-7xl mb-4 tracking-tighter mix-blend-multiply">
          {t('Proyects-title')}
        </h2>
        <div className="bg-ik-accent w-16 h-2 mb-6"></div>
        <p className="font-pixel text-xl md:text-2xl text-ik-dark leading-relaxed max-w-3xl">
          {t('Proyects-presentation')}
        </p>
      </div>

      {/* Projects Grid Container */}
      <div className="brutal-box bg-ik-teal p-4 md:p-8 border-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 auto-rows-[400px]">
          {PROJECTS_DATA.map((project, index) => (
            <ProjectsCard key={project.id} data={project} index={index + 1} />
          ))}
        </div>
      </div>
    </div>
  );
};
