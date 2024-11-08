import React, { useState } from "react";
import {
  FaHome,
  FaInfoCircle,
  FaProjectDiagram,
  FaPhoneAlt,
} from "react-icons/fa";

export const SideBar = () => {
    const [activeItem, setActiveItem] = useState(1);  // Estado para el item clickeado
    const [hoveredItem, setHoveredItem] = useState(1);  // Estado para el item en hover
  
    const handleClick = (index) => {
      // Si se hace clic en el mismo item, lo desactiva, si no, activa el nuevo item
      setActiveItem(activeItem === index ? null : index);
    };

  return (
    <nav className="w-24 h-full bg-slate-400 fixed top-0 left-0 flex items-center justify-center">
      <ul className="flex flex-col items-center space-y-8 py-8">
        <li 
          className="text-white flex flex-col items-center cursor-pointer" 
          onClick={() => handleClick(1)}
          onMouseEnter={() => setHoveredItem(1)}  // Mostrar texto en hover
          onMouseLeave={() => setHoveredItem(null)}  // Ocultar texto cuando se sale del hover
        >
          <FaHome size={30} 
            className={`transition-transform duration-300 transform ${activeItem === 1 || hoveredItem === 1 ? 'scale-100' : 'scale-125'} hover:scale-100`} 
          />
          <span 
            className={`mt-2 transition-opacity duration-300 ${activeItem === 1 || hoveredItem === 1 ? 'opacity-100' : 'opacity-0'} hover:opacity-100`}
          >
            Home
          </span>
        </li>

        <li 
          className="text-white flex flex-col items-center cursor-pointer" 
          onClick={() => handleClick(2)}
          onMouseEnter={() => setHoveredItem(2)}  // Mostrar texto en hover
          onMouseLeave={() => setHoveredItem(null)}  // Ocultar texto cuando se sale del hover
        >
          <FaInfoCircle size={30} 
            className={`transition-transform duration-300 transform ${activeItem === 2 || hoveredItem === 2 ? 'scale-100' : 'scale-125'} hover:scale-100`} 
          />
          <span 
            className={`mt-2 transition-opacity duration-300 ${activeItem === 2 || hoveredItem === 2 ? 'opacity-100' : 'opacity-0'} hover:opacity-100`}
          >
            About
          </span>
        </li>

        <li 
          className="text-white flex flex-col items-center cursor-pointer" 
          onClick={() => handleClick(3)}
          onMouseEnter={() => setHoveredItem(3)}  // Mostrar texto en hover
          onMouseLeave={() => setHoveredItem(null)}  // Ocultar texto cuando se sale del hover
        >
          <FaProjectDiagram size={30} 
            className={`transition-transform duration-300 transform ${activeItem === 3 || hoveredItem === 3 ? 'scale-100' : 'scale-125'} hover:scale-100`} 
          />
          <span 
            className={`mt-2 transition-opacity duration-300 ${activeItem === 3 || hoveredItem === 3 ? 'opacity-100' : 'opacity-0'} hover:opacity-100`}
          >
            Projects
          </span>
        </li>

        <li 
          className="text-white flex flex-col items-center cursor-pointer" 
          onClick={() => handleClick(4)}
          onMouseEnter={() => setHoveredItem(4)}  // Mostrar texto en hover
          onMouseLeave={() => setHoveredItem(null)}  // Ocultar texto cuando se sale del hover
        >
          <FaPhoneAlt size={30} 
            className={`transition-transform duration-300 transform ${activeItem === 4 || hoveredItem === 4 ? 'scale-100' : 'scale-125'} hover:scale-100`} 
          />
          <span 
            className={`mt-2 transition-opacity duration-300 ${activeItem === 4 || hoveredItem === 4 ? 'opacity-100' : 'opacity-0'} hover:opacity-100`}
          >
            Contact
          </span>
        </li>
      </ul>
    </nav>
  );
};
