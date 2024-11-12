import React, { useState } from "react";
import {
  FaHome,
  FaInfoCircle,
  FaProjectDiagram,
  FaPhoneAlt,
} from "react-icons/fa";

export const SideBar = () => {
  const [textIcon, setTextIcon] = useState(null);
  const [cliked, setCliked] = useState('home');

  const mauseEntered = (item) => {
    setTextIcon(item);
  };
  const mauseExit = () => setTextIcon(null);

  const clikeado = (item) => {
    setCliked(item);
  };

  return (
    <nav className=" bg-custom-blue py-4 absolute bottom-0 w-full sm:w-32 sm:h-full sm:fixed sm:top-0 sm:left-0 sm:flex sm:items-center sm:justify-center">
      <ul className=" flex justify-evenly gap-8 sm:flex-col sm:gap-16">
        <li
          className=" text-custom-white cursor-pointer hover:scale-125 transition duration-200 flex flex-col justify-center items-center font-bold"
          onMouseEnter={() => mauseEntered("home")}
          onMouseLeave={mauseExit}
          onClick={()=>clikeado("home")}
        >
          <FaHome size={30} />
          {(textIcon === 'home' || cliked === 'home') && <span className=" text-xs py-3">Home</span>}
        </li>
        <li
          className=" text-custom-white cursor-pointer hover:scale-125 transition duration-200 flex flex-col justify-center items-center font-bold"
          onMouseEnter={() => mauseEntered("about")}
          onMouseLeave={mauseExit}
          onClick={()=>clikeado("about")}
        >
          <FaInfoCircle size={30} />
          {(textIcon === 'about' || cliked === 'about') && <span className=" text-xs py-3">About</span>}
        </li>
        <li
          className=" text-custom-white cursor-pointer hover:scale-125 transition duration-200 flex flex-col justify-center items-center font-bold"
          onMouseEnter={() => mauseEntered("project")}
          onMouseLeave={mauseExit}
          onClick={()=>clikeado("project")}
        >
          <FaProjectDiagram size={30} />
          {(textIcon === 'project' || cliked === 'project') && <span className=" text-xs py-3">Projects</span>}
        </li>
        <li
          className=" text-custom-white cursor-pointer hover:scale-125 transition duration-200 flex flex-col justify-center items-center font-bold"
          onMouseEnter={() => mauseEntered("contact")}
          onMouseLeave={mauseExit}
          onClick={()=>clikeado("contact")}
        >
          <FaPhoneAlt size={30} />
          {(textIcon === 'contact' || cliked === 'contact') && <span className=" text-xs py-3">Contact</span>}
        </li>
      </ul>
    </nav>
  );
};
