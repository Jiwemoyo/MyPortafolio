import React from "react";
import { useTranslation } from "react-i18next";
export const About = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-custom-blue flex flex-col gap-6 justify-center items-center h-screen px-8 text-center text-custom-celeste text-xl font-semibold">
      <p>{t("about-presentation")}</p>
      <h3 className=" text-custom-red text-2xl">{t("carer-path")}</h3>
      <ul className=" list-disc text-xl px-6 text-left text-custom-white space-y-4">
        <li>
          {" "}
          <span className=" text-custom-celeste mr-8">2019 - 2020</span>
          {t("dates-about.date1")}
        </li>
        <li>
          {" "}
          <span className=" text-custom-celeste mr-8">2021 - 2023</span>
          {t("dates-about.date2")}
        </li>
        <li>
          {" "}
          <span className=" text-custom-celeste mr-8">2023 - 2024</span>
          {t("dates-about.date3")}
        </li>
      </ul>
      <h3 className=" text-custom-red text-2xl">{t("skills")}</h3>
      <ul className="grid grid-cols-3 gap-8 text-custom-white mt-5 font-semibold sm:flex">
        <li className="animate-bg-fade bg-blue-500 p-2 rounded-lg">Html</li>
        <li className="animate-bg-fade bg-blue-500 p-2 rounded-lg">CSS</li>
        <li className="animate-bg-fade bg-blue-500 p-2 rounded-lg">JS</li>
        <li className="animate-bg-fade bg-blue-500 p-2 rounded-lg">React</li>
        <li className="animate-bg-fade bg-blue-500 p-2 rounded-lg">Tailwind</li>
        <li className="animate-bg-fade bg-blue-500 p-2 rounded-lg">npm</li>
        <li className="animate-bg-fade bg-blue-500 p-2 rounded-lg">Python</li>
        <li className="animate-bg-fade bg-blue-500 p-2 rounded-lg">Flask</li>
        <li className="animate-bg-fade bg-blue-500 p-2 rounded-lg">SQL</li>
        <li className="animate-bg-fade bg-blue-500 p-2 rounded-lg">MongoDB</li>
        <li className="animate-bg-fade bg-blue-500 p-2 rounded-lg">FireBase</li>
        <li className="animate-bg-fade bg-blue-500 p-2 rounded-lg">Figma</li>
        <li className="col-start-2 animate-bg-fade bg-blue-500 p-2 rounded-lg">
          Blender
        </li>
      </ul>
    </div>
  );
};
