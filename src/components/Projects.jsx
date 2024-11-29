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

      {/* Bento Grid con masonry style */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto auto-rows-[300px]">
        {dataProject.map((project, index) => (
          <div 
            key={project.id} 
            className={`
              ${index === 0 ? 'md:col-span-2 md:row-span-2 h-full' : ''} 
              ${index === 3 ? 'lg:col-span-2' : ''}
              ${index === dataProject.length - 1 ? 'md:col-span-2 lg:col-span-1' : ''}
              transform transition-all duration-500 hover:z-10
            `}
          >
            <ProjectsCard data={project} />
          </div>
        ))}
      </div>
    </div>
  );
};