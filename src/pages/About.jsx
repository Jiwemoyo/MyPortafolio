import React from "react";
import { useTranslation } from "react-i18next";

export const About = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-[calc(100vh-4rem)] p-4 lg:p-8 w-full relative">

      {/* Header Info Block */}
      <div className="brutal-box bg-white p-6 md:p-10 mb-8 flex flex-col items-center text-center border-4 border-ik-dark relative">
        <div className="absolute top-0 left-0 bg-ik-accent text-white font-pixel text-xl px-4 py-1">
          PROFILE_DATA
        </div>

        <div className="w-32 h-32 border-4 border-ik-dark bg-ik-teal p-1 mb-6 mt-8 transform rotate-3 hover:rotate-0 transition-transform">
          <img
            src="profile.jpg"
            alt="Avatar"
            className="w-full h-full object-cover filter contrast-125 grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>

        <h2 className="text-ik-dark font-display text-4xl md:text-6xl uppercase tracking-tighter mb-4">
          {t("about-hi")}
        </h2>

        <p className="font-pixel text-xl md:text-2xl text-ik-dark max-w-2xl mb-8 leading-tight">
          {t("about-catch")}
        </p>

        <a
          href="/CV_2026_ES.pdf"
          download
          className="brutal-btn bg-ik-dark text-ik-light w-full md:w-auto text-lg"
        >
          {t("download-cv")} &darr;
        </a>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Presentación */}
        <div className="brutal-box bg-ik-teal p-6 md:p-8 relative">
          <div className="absolute -top-4 -left-4 bg-ik-dark text-ik-light font-display px-3 py-1 text-xl border-4 border-ik-dark shadow-[4px_4px_0_0_#fff]">
            01
          </div>
          <h3 className="font-display text-2xl text-ik-dark uppercase mb-4 mt-2">Sobre Mí</h3>
          <div className="bg-white border-2 border-ik-dark p-4 font-pixel text-lg text-ik-dark leading-relaxed">
            {t("about-presentation")}
          </div>
        </div>

        {/* Carrera */}
        <div className="brutal-box bg-white p-6 md:p-8 relative">
          <div className="absolute -top-4 -left-4 bg-ik-accent text-white font-display px-3 py-1 text-xl border-4 border-ik-dark">
            02
          </div>
          <h3 className="font-display text-2xl text-ik-dark uppercase mb-6 mt-2">Trayectoria</h3>
          <div className="space-y-6">
            {[
              { year: "2019-2020", key: "date1" },
              { year: "2021-2023", key: "date2" },
              { year: "2023-2024", key: "date3" }
            ].map(({ year, key }) => (
              <div key={key} className="flex gap-4 group">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-none border-2 border-ik-dark bg-ik-teal group-hover:bg-ik-accent transition-colors"></div>
                  <div className="w-1 h-full bg-ik-dark mt-2 group-last:hidden"></div>
                </div>
                <div>
                  <div className="bg-ik-dark text-ik-light font-pixel text-sm px-2 inline-block mb-1">{year}</div>
                  <div className="font-pixel text-lg text-ik-dark uppercase">{t(`dates-about.${key}`)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="brutal-box bg-white p-6 md:p-8 relative">
          <div className="absolute -top-4 -left-4 bg-ik-dark text-ik-light font-display px-3 py-1 text-xl border-4 border-ik-dark">
            03
          </div>
          <h3 className="font-display text-2xl text-ik-dark uppercase mb-6 mt-2 border-b-4 border-ik-dark pb-2 inline-block">Hab. Tecnológicas</h3>
          <div className="flex flex-wrap gap-3">
            {[
              "Html", "CSS", "JS", "React", "Tailwind", "npm",
              "Python", "Flask", "SQL", "MongoDB", "FireBase", "Figma"
            ].map((skill, idx) => (
              <div key={idx} className="border-2 border-ik-dark bg-ik-light px-3 py-1 font-pixel text-lg text-ik-dark hover:bg-ik-accent hover:text-white hover:-translate-y-1 transition-all shadow-[2px_2px_0px_0px_rgba(17,17,17,1)] cursor-crosshair">
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Filosofía */}
        <div className="brutal-box bg-ik-dark p-6 md:p-8 relative text-ik-light">
          <div className="absolute -top-4 -left-4 bg-white text-ik-dark font-display px-3 py-1 text-xl border-4 border-ik-dark">
            04
          </div>
          <div className="absolute -right-10 -bottom-10 font-display text-[8rem] text-white opacity-5 pointer-events-none rotate-12">
            PHIL
          </div>
          <h3 className="font-display text-2xl text-ik-accent uppercase mb-4 mt-2">Filosofía</h3>
          <blockquote className="font-pixel text-xl leading-relaxed border-l-4 border-ik-accent pl-4">
            "{t("Philosophy-context")}"
          </blockquote>
        </div>

      </div>
    </div>
  );
};
