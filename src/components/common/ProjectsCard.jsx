import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export const ProjectsCard = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={data.Link}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative w-full h-full bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col"
    >
      {/* Image */}
      <div className="w-full h-48 overflow-hidden relative">
        <img
          src={data.img}
          alt={data.titulo}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}></div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col p-5 md:p-6 bg-white z-10">
        {/* Title */}
        <h3 className="text-theme-text text-lg md:text-xl font-bold mb-2">
          {data.titulo}
        </h3>

        {/* Description */}
        <p className="text-theme-muted text-sm mb-4 line-clamp-2 md:line-clamp-3 flex-1">
          {data.Description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {data.Tecnologies.slice(0, 3).map((tech, idx) => (
            <span
              key={idx}
              className="text-theme-secondary bg-theme-secondary/10 text-xs px-2.5 py-1 rounded-full font-medium"
            >
              {tech}
            </span>
          ))}
          {data.Tecnologies.length > 3 && (
            <span className="text-gray-500 bg-gray-100 text-xs px-2.5 py-1 rounded-full font-medium">
              +{data.Tecnologies.length - 3}
            </span>
          )}
        </div>

        {/* Button */}
        <div className="text-theme-primary text-sm font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
          View Project &rarr;
        </div>
      </div>
    </a>
  );
};
