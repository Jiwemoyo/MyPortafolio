import React from "react";
import { useTranslation } from "react-i18next";

export const About = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-theme-bg min-h-screen w-full flex items-center justify-center py-12 px-4 md:px-8 relative overflow-hidden">
      {/* Decoración de líneas */}
      <div className="absolute top-0 left-1/4 w-px h-96 bg-gradient-to-b from-theme-primary to-transparent opacity-10"></div>
      <div className="absolute top-1/2 right-1/4 w-px h-96 bg-gradient-to-t from-theme-secondary to-transparent opacity-10"></div>

      <div className="max-w-5xl w-full relative z-10">
        {/* Header */}
        <div className="text-center mb-12 border-b border-gray-200 pb-8">
          <div className="flex justify-center mb-6">
            <div className="w-32 h-32 rounded-full border-4 border-white shadow-lg overflow-hidden relative">
              <img
                src="profile.jpg"
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h2 className="text-theme-text font-black text-3xl md:text-5xl mb-4 tracking-tight">
            {t("about-hi")}
          </h2>
          <p className="text-theme-muted text-sm md:text-lg mb-6 max-w-lg mx-auto leading-relaxed">
            {t("about-catch")}
          </p>
          <a
            href="/AlessandroCisneros_FullStackCV_EN.pdf"
            download
            className="btn-primary inline-flex items-center gap-2"
          >
            {t("download-cv")} &darr;
          </a>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Presentación */}
          <div className="minimal-border p-6 md:p-8">
            <div className="text-theme-primary font-bold mb-4 text-lg">Sobre Mí</div>
            <p className="text-theme-text text-sm md:text-base leading-relaxed">
              {t("about-presentation")}
            </p>
          </div>

          {/* Carrera */}
          <div className="minimal-border p-6 md:p-8">
            <div className="text-theme-secondary font-bold mb-4 text-lg">Trayectoria</div>
            {[
              { year: "2019-2020", key: "date1" },
              { year: "2021-2023", key: "date2" },
              { year: "2023-2024", key: "date3" }
            ].map(({ year, key }) => (
              <div key={key} className="relative pl-6 mb-6 last:mb-0">
                <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-theme-primary"></div>
                <div className="text-theme-primary text-sm font-bold mb-1">{year}</div>
                <div className="text-theme-text text-sm">{t(`dates-about.${key}`)}</div>
              </div>
            ))}
          </div>

          {/* Skills */}
          <div className="minimal-border p-6 md:p-8">
            <div className="text-theme-primary font-bold mb-5 text-lg">Habilidades Tecnológicas</div>
            <div className="flex flex-wrap gap-2">
              {[
                "Html", "CSS", "JS", "React", "Tailwind", "npm",
                "Python", "Flask", "SQL", "MongoDB", "FireBase", "Figma"
              ].map((skill, idx) => (
                <div key={idx} className="bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-full text-xs font-semibold text-theme-text hover:bg-theme-primary hover:text-white hover:border-theme-primary transition-all shadow-sm">
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Filosofía */}
          <div className="minimal-border p-6 md:p-8 flex flex-col justify-center bg-gradient-to-br from-white to-gray-50">
            <div className="text-theme-secondary font-bold mb-4 text-lg">Filosofía</div>
            <p className="text-theme-text text-sm md:text-base leading-relaxed italic border-l-4 border-theme-secondary pl-4">
              "{t("Philosophy-context")}"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
