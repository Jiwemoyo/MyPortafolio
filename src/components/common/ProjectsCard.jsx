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
      className="cyber-border group relative w-full h-full bg-cyber-dark/60 backdrop-blur overflow-hidden hover:shadow-[0_0_30px_rgba(0,217,255,0.5)] transition-all duration-300"
    >
      {/* Image */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src={data.img}
          alt={data.titulo}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Overlay with Glow */}
      <div className={`absolute inset-0 bg-gradient-to-t from-cyber-black via-transparent to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-70'}`}></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-5 z-10">
        {/* Title */}
        <h3 className={`glow-text text-lg md:text-xl font-black mb-2 transition-all duration-300 ${
          isHovered ? 'text-xl md:text-2xl' : ''
        }`}>
          {data.titulo}
        </h3>

        {/* Description */}
        <p className={`text-cyber-white text-xs md:text-sm mb-3 line-clamp-2 transition-all duration-300 ${
          isHovered ? 'line-clamp-3 md:line-clamp-4' : 'line-clamp-2'
        }`}>
          {data.Description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1 md:gap-2 mb-4">
          {data.Tecnologies.slice(0, 3).map((tech, idx) => (
            <span 
              key={idx} 
              className="text-cyber-cyan text-xs px-2 py-1 border-2 border-cyber-magenta/50 hover:border-cyber-magenta hover:text-cyber-magenta transition-colors font-bold"
            >
              {tech}
            </span>
          ))}
          {data.Tecnologies.length > 3 && (
            <span className="text-cyber-gray text-xs px-2 py-1 font-bold">
              +{data.Tecnologies.length - 3}
            </span>
          )}
        </div>

        {/* Button */}
        <button className="btn-cyber w-full text-xs md:text-sm">
          &gt;_ VER PROYECTO &lt;
        </button>
      </div>
    </a>
  );
};
