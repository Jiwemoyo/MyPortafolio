import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export const ProjectsCard = ({ data, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={data.Link}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="brutal-box bg-white flex flex-col group hover:shadow-brutal-active hover:translate-x-1 hover:translate-y-1 transition-all duration-200 cursor-crosshair overflow-hidden relative"
    >
      {/* Etiqueta de Número (Estilo Inter-Knot Poster) */}
      <div className="absolute top-0 left-0 bg-ik-dark text-ik-light font-display text-2xl px-3 py-1 z-20">
        {index < 10 ? `0${index}` : index}
      </div>

      {/* Image Block */}
      <div className="w-full h-48 border-b-4 border-ik-dark overflow-hidden relative bg-ik-dark">
        <img
          src={data.img}
          alt={data.titulo}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter sepia-[0.3] hover:sepia-0"
        />
        {/* Halftone Overlay on Hover */}
        <div className={`absolute inset-0 halftone-bg mix-blend-multiply opacity-50 transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}></div>
      </div>

      {/* Content Block */}
      <div className="flex-1 flex flex-col p-5 bg-white z-10">
        <h3 className="text-ik-dark font-display text-xl uppercase mb-2 border-b-2 border-ik-dark pb-2">
          {data.titulo}
        </h3>

        <p className="font-pixel text-ik-dark text-lg mb-4 line-clamp-3 flex-1 leading-tight">
          {data.Description}
        </p>

        {/* Technologies - Pixel Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {data.Tecnologies.slice(0, 3).map((tech, idx) => (
            <span
              key={idx}
              className="bg-ik-dark text-ik-light font-pixel text-sm px-2 py-0.5"
            >
              [{tech}]
            </span>
          ))}
          {data.Tecnologies.length > 3 && (
            <span className="bg-ik-accent text-white font-pixel text-sm px-2 py-0.5">
              +{data.Tecnologies.length - 3}
            </span>
          )}
        </div>

        {/* Action Fake Button */}
        <div className="w-full bg-ik-teal border-2 border-ik-dark text-ik-dark font-pixel text-xl text-center py-1 mt-auto group-hover:bg-ik-accent group-hover:text-white transition-colors">
          ACCESS_DATA &gt;
        </div>
      </div>
    </a>
  );
};
