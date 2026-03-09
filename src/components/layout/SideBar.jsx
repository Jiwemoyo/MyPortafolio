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
    <aside className="hidden sm:flex sticky top-0 h-screen flex-col items-center justify-between bg-white border-r border-gray-200 py-8 px-4 gap-12 z-40 shadow-sm">
      {/* Logo/Brand */}
      <div className="flex-shrink-0">
        <button
          onClick={() => navigate('/')}
          className="block cursor-pointer"
        >
          <div className="w-14 h-14 rounded-full bg-theme-primary text-white flex items-center justify-center hover:bg-sky-600 shadow-md transition-all">
            <span className="text-2xl font-black">A</span>
          </div>
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-8 flex-1 justify-center">
        {navItems.map(({ key, path, icon: Icon, label }) => (
          <button
            key={key}
            onClick={() => navigate(path)}
            onMouseEnter={() => setHoveredIcon(key)}
            onMouseLeave={() => setHoveredIcon(null)}
            className={`flex items-center justify-center w-12 h-12 rounded-lg transition-all duration-300 cursor-pointer relative group ${activeNav === key
                ? 'bg-theme-primary text-white shadow-md'
                : 'bg-gray-50 text-gray-400 hover:bg-theme-primary/10 hover:text-theme-primary'
              }`}
          >
            <Icon className="text-2xl" />
            <span className="absolute left-full ml-3 px-3 py-1 bg-gray-800 text-white rounded text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg z-50">
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
        className="flex items-center justify-center w-12 h-12 rounded-lg bg-gray-50 text-gray-400 hover:bg-theme-primary/10 hover:text-theme-primary transition-all duration-300 cursor-pointer relative group"
      >
        <AiOutlineGlobal className="text-2xl" />
        <span className="absolute left-full ml-3 px-3 py-1 bg-gray-800 text-white rounded text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg z-50">
          {currentLanguage === 'en' ? 'ES' : 'EN'}
        </span>
      </button>

      {/* Footer */}
      <div className="flex-shrink-0 text-center">
        <p className="text-xs text-gray-400 font-medium">© 2024</p>
      </div>
    </aside>
  );
};
