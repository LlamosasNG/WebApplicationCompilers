import { useState } from "react";
import { FaHome, FaUser, FaCog, FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white p-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">MiSitio</div>
        <div className="hidden md:flex space-x-4">
          <a
            href="/"
            className="flex items-center space-x-1 hover:text-gray-300"
          >
            <FaHome />
            <span>Inicio</span>
          </a>
          <a
            href="/SyntacticDecending"
            className="flex items-center space-x-1 hover:text-gray-300"
          >
            <FaUser />
            <span>Sobre mí</span>
          </a>
          <a
            href="/SyntacticAscending"
            className="flex items-center space-x-1 hover:text-gray-300"
          >
            <FaCog />
            <span>Servicios</span>
          </a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <a href="#home" className="block p-2 hover:bg-gray-700">
            Inicio
          </a>
          <a href="#about" className="block p-2 hover:bg-gray-700">
            Sobre mí
          </a>
          <a href="#services" className="block p-2 hover:bg-gray-700">
            Servicios
          </a>
        </div>
      )}
    </nav>
  );
}
