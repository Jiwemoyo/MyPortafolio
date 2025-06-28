import React from "react";
import dataProject from '../../proyectsData';
import { ProjectsCard } from "./ProjectsCard";
import { useTranslation } from "react-i18next";

export const Projects = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-custom-blue min-h-screen px-4 py-12 md:px-8 sm:w-full">
      {/* Header Section con animación sutil */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-custom-red text-3xl md:text-5xl font-bold mb-6 animate-fade-in">
          {t('Proyects-title')}
        </h2>
        <p className="text-custom-celeste text-lg md:text-xl font-semibold">
          {t('Proyects-presentation')}
        </p>
      </div>

      {/* Bento Grid ordenado y uniforme */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto auto-rows-[350px]">
        {dataProject.map((project) => (
          <div 
            key={project.id}
            className="rounded-2xl shadow-xl bg-custom-celeste/10 h-full w-full min-h-[320px] max-h-[400px] flex flex-col items-stretch justify-between transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:z-10"
          >
            <ProjectsCard data={project} />
          </div>
        ))}
      </div>
    </div>
  );
};