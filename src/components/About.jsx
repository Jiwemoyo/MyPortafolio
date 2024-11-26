import React from "react";
import { useTranslation } from "react-i18next";

export const About = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-custom-blue flex flex-col gap-6 justify-center items-center h-screen px-8 text-center text-custom-celeste text-xl font-semibold sm:text-2xl sm:w-full sm:px-96">
      <p>{t("about-presentation")}</p>
      <h3 className="text-custom-red text-2xl sm:text-3xl mt-5">{t("carer-path")}</h3>
      <ul className="list-disc text-xl px-6 text-left text-custom-white space-y-4 sm:text-2xl">
        <li>
          <span className="text-custom-celeste mr-8">2019 - 2020</span>
          {t("dates-about.date1")}
        </li>
        <li>
          <span className="text-custom-celeste mr-8">2021 - 2023</span>
          {t("dates-about.date2")}
        </li>
        <li>
          <span className="text-custom-celeste mr-8">2023 - 2024</span>
          {t("dates-about.date3")}
        </li>
      </ul>
      <h3 className="text-custom-red text-2xl mt-5 sm:text-3xl">{t("skills")}</h3>
      <ul className="grid grid-cols-3 gap-8 text-custom-white mt-5 font-semibold sm:flex sm:flex-wrap">
        {[
          "Html", "CSS", "JS", "React", "Tailwind", "npm", 
          "Python", "Flask", "SQL", "MongoDB", "FireBase", "Figma", "Blender"
        ].map((skill, index) => (
          <li key={index} className="animate-bg-fade bg-blue-500 p-2 rounded-lg">
            {skill}
          </li>
        ))}
      </ul>
      <h3 className="text-custom-red text-2xl mt-5 sm:text-3xl">{t("Philosophy")}</h3>
      <p className="bg-custom-red py-8 px-8 bg-opacity-25 rounded-lg">{t("Philosophy-context")}</p>
    </div>
  );
};