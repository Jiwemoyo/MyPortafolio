import React from "react";
import { useTranslation } from "react-i18next";

export const About = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-custom-blue min-h-screen w-full flex items-center justify-center py-16 px-4 md:px-8 relative overflow-hidden">
      {/* Fondo decorativo sutil */}
      <div className="hidden md:block absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-custom-celeste/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-custom-red/20 rounded-full blur-2xl animate-pulse" />
      </div>
      <div className="max-w-6xl w-full h-full min-h-[80vh] grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 gap-8 items-stretch relative z-10">
        {/* div1: Avatar y saludo, ocupa ambas columnas en la primera fila */}
        <div className="flex flex-col items-center justify-center gap-4 w-full h-full lg:col-span-2 lg:row-start-1">
          <img src="profile.jpg" alt="Avatar" className="w-40 h-40 lg:w-56 lg:h-56 rounded-full border-4 border-custom-celeste shadow-lg bg-white object-cover mx-auto" />
          <h2 className="text-custom-celeste text-3xl lg:text-5xl font-extrabold animate-bounce text-center">{t("about-hi", { defaultValue: "¡Hola! Soy Alessandro 👋" })}</h2>
          <span className="text-custom-white text-lg lg:text-2xl italic mt-1 text-center max-w-xs lg:max-w-md">{t("about-catch", { defaultValue: "¡Listo para crear experiencias digitales memorables contigo!" })}</span>
        </div>

        {/* div2: Presentación, fila 2 columna 1 */}
        <div className="bg-custom-celeste/10 rounded-2xl shadow-xl p-8 xl:p-12 hover:scale-105 transition-transform duration-300 w-full h-full flex items-center lg:col-start-1 lg:row-start-2">
          <p className="text-custom-celeste text-lg md:text-xl lg:text-2xl font-semibold text-center w-full">
            {t("about-presentation")}
          </p>
        </div>

        {/* div3: Carrera, fila 2 columna 2 */}
        <div className="bg-custom-celeste/10 rounded-2xl shadow-xl p-8 xl:p-12 hover:rotate-1 transition-transform duration-300 w-full h-full flex flex-col justify-center lg:col-start-2 lg:row-start-2">
          <h3 className="text-custom-red text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-2">
            {t("carer-path")}
          </h3>
          <ul className="space-y-4 text-custom-white">
            { [
                { year: "2019 - 2020", key: "date1" },
                { year: "2021 - 2023", key: "date2" },
                { year: "2023 - 2024", key: "date3" }
              ].map(({ year, key }, idx) => (
                <li key={key} className={`flex flex-col md:flex-row md:items-center gap-2 ${idx % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                  <span className="text-custom-celeste font-semibold text-lg md:text-xl min-w-[140px]">
                    {year}
                  </span>
                  <span className="text-base md:text-lg">
                    {t(`dates-about.${key}`)}
                  </span>
                </li>
              ))}
          </ul>
        </div>

        {/* div4: Skills, fila 3 columna 1 */}
        <div className="bg-custom-celeste/10 rounded-2xl shadow-xl p-8 xl:p-12 hover:-rotate-1 transition-transform duration-300 w-full h-full flex flex-col justify-center lg:col-start-1 lg:row-start-3">
          <h3 className="text-custom-red text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-2">
            {t("skills")}
          </h3>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            { [
                { name: "Html", icon: "<i class='devicon-html5-plain colored'></i>" },
                { name: "CSS", icon: "<i class='devicon-css3-plain colored'></i>" },
                { name: "JS", icon: "<i class='devicon-javascript-plain colored'></i>" },
                { name: "React", icon: "<i class='devicon-react-original colored'></i>" },
                { name: "Tailwind", icon: "<i class='devicon-tailwindcss-plain colored'></i>" },
                { name: "npm", icon: "<i class='devicon-npm-original-wordmark colored'></i>" },
                { name: "Python", icon: "<i class='devicon-python-plain colored'></i>" },
                { name: "Flask", icon: "<i class='devicon-flask-original colored'></i>" },
                { name: "SQL", icon: "<i class='devicon-mysql-plain colored'></i>" },
                { name: "MongoDB", icon: "<i class='devicon-mongodb-plain colored'></i>" },
                { name: "FireBase", icon: "<i class='devicon-firebase-plain colored'></i>" },
                { name: "Figma", icon: "<i class='devicon-figma-plain colored'></i>" },
                { name: "Blender", icon: "<i class='devicon-blender-original colored'></i>" }
              ].map((skill, index) => (
                <li 
                  key={index} 
                  className="animate-bg-fade bg-blue-500 p-2 lg:p-3 rounded-lg text-custom-white font-semibold text-center text-xs sm:text-sm md:text-base flex flex-col items-center gap-1 shadow-md hover:scale-110 transition-transform duration-200 break-words truncate max-w-[90px] sm:max-w-[110px] md:max-w-[130px] xl:max-w-[150px]"
                  style={{overflowWrap: 'break-word', wordBreak: 'break-word'}}
                  dangerouslySetInnerHTML={{ __html: `${skill.icon}<span class='block w-full truncate'>${skill.name}</span>` }}
                />
              ))}
          </ul>
        </div>

        {/* div5: Filosofía, fila 3 columna 2 */}
        <div className="bg-custom-celeste/10 rounded-2xl shadow-xl p-8 xl:p-12 hover:scale-105 transition-transform duration-300 w-full h-full flex flex-col justify-center lg:col-start-2 lg:row-start-3">
          <h3 className="text-custom-red text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-1">
            {t("Philosophy")}
          </h3>
          <p className="bg-custom-red bg-opacity-25 rounded-lg p-6 text-custom-white text-base md:text-lg w-full">
            {t("Philosophy-context")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;