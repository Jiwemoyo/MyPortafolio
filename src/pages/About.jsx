import React from "react";
import { useTranslation } from "react-i18next";

export const About = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-cyber-black min-h-screen w-full flex items-center justify-center py-12 px-4 md:px-8 relative overflow-hidden grid-bg">
      {/* Decoración de líneas */}
      <div className="absolute top-0 left-1/4 w-px h-96 bg-gradient-to-b from-cyber-cyan to-transparent opacity-30"></div>
      <div className="absolute top-1/2 right-1/4 w-px h-96 bg-gradient-to-t from-cyber-magenta to-transparent opacity-30"></div>

      <div className="max-w-5xl w-full relative z-10">
        {/* Header */}
        <div className="text-center mb-12 border-b-2 border-cyber-cyan pb-8">
          <div className="flex justify-center mb-4">
            <div className="w-32 h-32 border-2 border-cyber-cyan overflow-hidden">
              <img 
                src="profile.jpg" 
                alt="Avatar" 
                className="w-full h-full object-cover filter brightness-110"
              />
            </div>
          </div>
          <h2 className="glow-text font-black text-3xl md:text-5xl mb-2 tracking-wider">
            {t("about-hi")}
          </h2>
          <p className="text-cyber-white text-sm md:text-lg mb-4 border-l-4 border-cyber-magenta pl-4 mx-auto max-w-lg">
            {t("about-catch")}
          </p>
          <a
            href="/AlessandroCisneros_FullStackCV_EN.pdf"
            download
            className="btn-cyber inline-block mt-4"
          >
            &gt; {t("download-cv")} &lt;
          </a>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Presentación */}
          <div className="cyber-border p-6 bg-cyber-dark/50 backdrop-blur">
            <div className="text-cyber-cyan font-bold mb-3 text-lg">[ PRESENTACION ]</div>
            <p className="text-cyber-white text-sm md:text-base leading-relaxed">
              {t("about-presentation")}
            </p>
          </div>

          {/* Carrera */}
          <div className="cyber-border p-6 bg-cyber-dark/50 backdrop-blur">
            <div className="text-cyber-magenta font-bold mb-3 text-lg">[ TRAYECTORIA ]</div>
            {[
              { year: "2019-2020", key: "date1" },
              { year: "2021-2023", key: "date2" },
              { year: "2023-2024", key: "date3" }
            ].map(({ year, key }) => (
              <div key={key} className="mb-3 pb-3 border-b border-cyber-gray last:border-b-0">
                <div className="text-cyber-cyan font-bold">&gt; {year}</div>
                <div className="text-cyber-white text-xs md:text-sm">{t(`dates-about.${key}`)}</div>
              </div>
            ))}
          </div>

          {/* Skills */}
          <div className="cyber-border p-6 bg-cyber-dark/50 backdrop-blur">
            <div className="text-cyber-cyan font-bold mb-4 text-lg">[ SKILLS ]</div>
            <div className="grid grid-cols-3 gap-2">
              {[
                "Html", "CSS", "JS", "React", "Tailwind", "npm",
                "Python", "Flask", "SQL", "MongoDB", "FireBase", "Figma"
              ].map((skill, idx) => (
                <div key={idx} className="cyber-border px-2 py-1 text-xs text-cyber-cyan font-bold text-center hover:bg-cyber-cyan/20 transition-colors">
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Filosofía */}
          <div className="cyber-border p-6 bg-cyber-dark/50 backdrop-blur">
            <div className="text-cyber-magenta font-bold mb-3 text-lg">[ FILOSOFIA ]</div>
            <p className="text-cyber-white text-xs md:text-sm leading-relaxed italic">
              {t("Philosophy-context")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
