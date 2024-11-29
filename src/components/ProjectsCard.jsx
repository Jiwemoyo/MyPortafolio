import React from "react";
import { useTranslation } from "react-i18next";

export const ProjectsCard = ({ data }) => {
  const { t } = useTranslation();
  
  return (
    <div className="group relative h-full overflow-hidden rounded-xl bg-gradient-to-br from-blue-950/30 to-purple-900/30 backdrop-blur-sm border border-white/5">
      {/* Imagen de fondo con overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={data.img} 
          alt={data.titulo}
          className="w-full h-full object-cover opacity-40 transition-transform duration-500 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 to-transparent" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 h-full p-6 flex flex-col">
        {/* Header con titulo y tecnologías */}
        <div className="mb-auto">
          <h3 className="text-custom-celeste text-2xl lg:text-3xl font-bold mb-4 transform transition-all duration-300 group-hover:-translate-y-1">
            {data.titulo}
          </h3>
          
          {/* Tecnologías en pills */}
          <div className="flex flex-wrap gap-2">
            {data.Tecnologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-500/20 backdrop-blur-sm rounded-full 
                         text-custom-white text-sm border border-blue-400/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Descripción con fade in */}
        <div className="mt-4">
          <p className="text-custom-white text-sm lg:text-base opacity-0 transform translate-y-4 
                       transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
            {data.Description}
          </p>
        </div>

        {/* Botón flotante */}
        <div className="mt-6">
          <a
            href={data.Link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full bg-custom-red/90 backdrop-blur-sm
                     hover:bg-custom-celeste text-custom-blue font-bold py-3 px-6 rounded-lg
                     transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg
                     hover:shadow-custom-celeste/20"
          >
            {t("VP")}
          </a>
        </div>
      </div>
    </div>
  );
};