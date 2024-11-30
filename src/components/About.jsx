import React from "react";
import { useTranslation } from "react-i18next";

export const About = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-custom-blue min-h-screen w-full flex items-center justify-center py-16 px-4 md:px-8">
      <div className="max-w-4xl w-full space-y-8">
        {/* Presentation Section */}
        <p className="text-custom-celeste text-lg md:text-xl lg:text-2xl font-semibold text-center">
          {t("about-presentation")}
        </p>

        {/* Career Path Section */}
        <div className="space-y-6">
          <h3 className="text-custom-red text-2xl md:text-3xl lg:text-4xl font-bold text-center">
            {t("carer-path")}
          </h3>
          <ul className="space-y-6 text-custom-white">
            {[
              { year: "2019 - 2020", key: "date1" },
              { year: "2021 - 2023", key: "date2" },
              { year: "2023 - 2024", key: "date3" }
            ].map(({ year, key }) => (
              <li key={key} className="flex flex-col md:flex-row md:items-center gap-2">
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

        {/* Skills Section */}
        <div className="space-y-6">
          <h3 className="text-custom-red text-2xl md:text-3xl lg:text-4xl font-bold text-center">
            {t("skills")}
          </h3>
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Html", "CSS", "JS", "React", "Tailwind", "npm", 
              "Python", "Flask", "SQL", "MongoDB", "FireBase", "Figma", "Blender"
            ].map((skill, index) => (
              <li 
                key={index} 
                className="animate-bg-fade bg-blue-500 p-2 rounded-lg text-custom-white font-semibold text-center text-sm md:text-base"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Philosophy Section */}
        <div className="space-y-6">
          <h3 className="text-custom-red text-2xl md:text-3xl lg:text-4xl font-bold text-center">
            {t("Philosophy")}
          </h3>
          <p className="bg-custom-red bg-opacity-25 rounded-lg p-6 text-custom-white text-base md:text-lg">
            {t("Philosophy-context")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;