import React from "react";
import { useTranslation } from "react-i18next";
export const ProjectsCard = ({data}) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col bg-white bg-opacity-10 rounded-lg shadow-lg overflow-hidden">
    <img src={data.img} alt="imgproyect" className="rounded-t-lg w-full h-64 object-cover" />
    <div className="py-8 px-8 flex flex-col gap-4 items-center">
      <h3 className="text-2xl lg:text-3xl">{data.titulo}</h3>
      <p className="text-custom-white text-sm lg:text-base">{data.Description}</p>
      <ul className="flex gap-2 justify-center text-custom-white">
        {data.Tecnologies.map((tecnologie, index) => (
          <li
            key={index}
            className="bg-custom-red text-custom-white font-semibold px-2.5 py-0.5 rounded"
          >
            {tecnologie}
          </li>
        ))}
      </ul>
      <a
        className="bg-custom-celeste font-bold text-custom-blue py-2 px-6 rounded-lg cursor-pointer w-full text-center mt-4 hover:bg-custom-white transition-all"
        target="_blank"
        href={data.Link}
      >
        {t("VP")}
      </a>
    </div>
  </div>
  );
};
