import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaInfoCircle,
  FaProjectDiagram,
  FaPhoneAlt,
  FaGlobeAmericas
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

export const SideBar = () => {

  const{t,i18n}=useTranslation()
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'es' : 'en';
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage); 
  };

  const [textIcon, setTextIcon] = useState(null);
  const [cliked, setCliked] = useState("home");

  const mauseEntered = (item) => {
    setTextIcon(item);
  };
  const mauseExit = () => setTextIcon(null);

  const clikeado = (item) => {
    setCliked(item);
  };

  return (
    <nav className="  bg-custom-blue sticky bottom-0 px-4  py-8 w-full sm:w-32 sm:flex sm:items-center sm:justify-center sm:static">
      <ul className=" flex justify-evenly gap-8 sm:flex-col sm:gap-16">
        <Link
          to={"/"}
          className=" text-custom-white cursor-pointer hover:scale-125 transition duration-200 flex flex-col justify-center items-center font-bold"
          onMouseEnter={() => mauseEntered("home")}
          onMouseLeave={mauseExit}
          onClick={() => clikeado("home")}
        >
          <FaHome size={30} />
          {(textIcon === "home" || cliked === "home") && (
            <span className=" text-xs py-3">Home</span>
          )}
        </Link>
        <Link
          to={"/about"}
          className=" text-custom-white cursor-pointer hover:scale-125 transition duration-200 flex flex-col justify-center items-center font-bold"
          onMouseEnter={() => mauseEntered("about")}
          onMouseLeave={mauseExit}
          onClick={() => clikeado("about")}
        >
          <FaInfoCircle size={30} />
          {(textIcon === "about" || cliked === "about") && (
            <span className=" text-xs py-3">About</span>
          )}
        </Link>
        <Link
          to={"/projects"}
          className=" text-custom-white cursor-pointer hover:scale-125 transition duration-200 flex flex-col justify-center items-center font-bold"
          onMouseEnter={() => mauseEntered("project")}
          onMouseLeave={mauseExit}
          onClick={() => clikeado("project")}
        >
          <FaProjectDiagram size={30} />
          {(textIcon === "project" || cliked === "project") && (
            <span className=" text-xs py-3">Projects</span>
          )}
        </Link>
        <Link
          to={"/contact"}
          className=" text-custom-white cursor-pointer hover:scale-125 transition duration-200 flex flex-col justify-center items-center font-bold"
          onMouseEnter={() => mauseEntered("contact")}
          onMouseLeave={mauseExit}
          onClick={() => clikeado("contact")}
        >
          <FaPhoneAlt size={30} />
          {(textIcon === "contact" || cliked === "contact") && (
            <span className=" text-xs py-3">Contact</span>
          )}
        </Link>
        <div
        className="text-custom-white cursor-pointer hover:scale-125 transition duration-200 flex flex-col justify-center items-center font-bold "
        onClick={toggleLanguage}
        onMouseEnter={() => mauseEntered("language")}
        onMouseLeave={mauseExit}
      >
        <FaGlobeAmericas size={30} />
        {(textIcon === "language" || cliked === "language") && (
          <span className="text-xs py-3">
            {language === "en" ? "Español" : "English"}
          </span>
        )}
      </div>
      </ul>
    </nav>
  );
};
