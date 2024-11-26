import React from "react";
import dataProject from '../../proyectsData'
import { ProjectsCard } from "./ProjectsCard";
import { useTranslation } from "react-i18next";

export const Projects = () => {
  const { t } = useTranslation();
  return (
<div className="bg-custom-blue flex flex-col gap-8 justify-center items-center h-100 px-8 text-center text-custom-celeste text-xl font-semibold sm:text-2xl sm:w-screen sm:py-28">
      <h2 className="text-custom-red text-3xl font-bold sm:text-5xl">{t('Proyects-title')}</h2>
      <p className="max-w-2xl">
        {t('Proyects-presentation')}
      </p>
      {/* Grid layout for larger screens */}
      <div className=" flex flex-col items-center justify-center sm:flex-row flex-wrap gap-9 sm:mt-10">
        {dataProject.map((project) => (
          <ProjectsCard key={project.id} data={project} />
        ))}
      </div>
    </div>
  );
};
