import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFolderOpen,
  AiOutlineContacts,
  AiOutlineGlobal
} from "react-icons/ai";
import { useTranslation } from "react-i18next";

export const SideBar = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const navItems = [
    { key: 'home', path: '/', icon: AiOutlineHome, label: t("nav-home") },
    { key: 'about', path: '/about', icon: AiOutlineUser, label: t("nav-about") },
    { key: 'projects', path: '/projects', icon: AiOutlineFolderOpen, label: t("nav-projects") },
    { key: 'contact', path: '/contact', icon: AiOutlineContacts, label: t("nav-contact") }
  ];

  const getActiveKey = () => {
    if (location.pathname === '/') return 'home';
    if (location.pathname === '/about') return 'about';
    if (location.pathname === '/projects') return 'projects';
    if (location.pathname === '/contact') return 'contact';
    return 'home';
  };

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLanguage);
    setCurrentLanguage(newLanguage);
  };

  const activeNav = getActiveKey();

  return (
    <aside className="hidden sm:flex h-full flex-col items-center justify-between bg-ik-light border-r-8 border-ik-dark py-8 px-4 gap-12 z-40 shadow-[10px_0_0_0_rgba(17,17,17,1)]">
      {/* Logo/Brand */}
      <div className="flex-shrink-0">
        <button
          onClick={() => navigate('/')}
          className="block cursor-pointer outline-none"
        >
          <div className="w-16 h-16 bg-ik-accent border-4 border-ik-dark text-white flex items-center justify-center brutal-box shadow-brutal hover:shadow-brutal-active transition-all -rotate-3 hover:translate-y-1 hover:translate-x-1">
            <span className="text-3xl font-display font-black tracking-tighter">A</span>
          </div>
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-6 flex-1 justify-center relative w-full px-2">
        <div className="absolute left-6 top-0 bottom-0 w-1 bg-ik-dark/10 -z-10"></div>
        {navItems.map(({ key, path, icon: Icon, label }) => (
          <button
            key={key}
            onClick={() => navigate(path)}
            onMouseEnter={() => setHoveredIcon(key)}
            onMouseLeave={() => setHoveredIcon(null)}
            className={`flex items-center justify-center w-14 h-14 border-4 border-ik-dark transition-all cursor-pointer relative group ${activeNav === key
              ? 'bg-ik-accent text-white shadow-brutal translate-x-1 -translate-y-1'
              : 'bg-white text-ik-dark shadow-brutal-active hover:shadow-brutal hover:-translate-y-1 hover:-translate-x-1'
              }`}
          >
            <Icon className="text-3xl" />
            <span className="absolute left-full ml-4 px-3 py-1 bg-ik-dark text-ik-light font-pixel text-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-none pointer-events-none before:content-[''] before:absolute before:-left-2 before:top-1/2 before:-translate-y-1/2 before:w-0 before:h-0 before:border-y-[6px] before:border-y-transparent before:border-r-[8px] before:border-r-ik-dark z-50">
              {label}
            </span>
          </button>
        ))}
      </nav>

      {/* Language Toggle */}
      <button
        onClick={toggleLanguage}
        onMouseEnter={() => setHoveredIcon('language')}
        onMouseLeave={() => setHoveredIcon(null)}
        className="flex items-center justify-center w-14 h-14 border-4 border-ik-dark bg-ik-teal text-ik-dark shadow-brutal hover:shadow-brutal-active hover:translate-y-1 hover:translate-x-1 transition-all cursor-pointer relative group"
      >
        <AiOutlineGlobal className="text-3xl" />
        <span className="absolute left-full ml-4 px-3 py-1 bg-ik-dark text-ik-light font-pixel text-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-none pointer-events-none before:content-[''] before:absolute before:-left-2 before:top-1/2 before:-translate-y-1/2 before:w-0 before:h-0 before:border-y-[6px] before:border-y-transparent before:border-r-[8px] before:border-r-ik-dark z-50">
          {currentLanguage === 'en' ? 'ES' : 'EN'}
        </span>
      </button>

      {/* Footer */}
      <div className="flex-shrink-0 text-center w-full border-t-4 border-ik-dark pt-4 mt-4">
        <p className="font-pixel text-ik-dark text-xl font-bold bg-white border-2 border-ik-dark inline-block px-2">V 1.0</p>
      </div>
    </aside>
  );
};
