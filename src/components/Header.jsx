import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#880E4F] text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        
        {/* Logo y título */}
        <div className="flex items-center space-x-3">
          <img
            src="/Logo.png" // Cambia esto por tu logo real
            alt="Logo"
            className="h-12 w-auto sm:h-14 md:h-16"
          />
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
            CENTRO DE EMPRENDIMIENTO UNIVALLE
          </h1>
        </div>

        {/* Menú de navegación (versión de escritorio) */}
        <nav className="hidden md:flex space-x-6 text-sm lg:text-base">
          <a href="#" className="hover:underline">Acerca de nosotros</a>
          <a href="#" className="hover:underline">Nuestros servicios</a>
          <a href="#" className="hover:underline">Crowd Funding</a>
          <a href="#" className="hover:underline">Apoya a emprendedor</a>
          <a href="#" className="hover:underline">Postulaciones</a>
        </nav>

        {/* Barra de búsqueda */}
        <div className="hidden md:flex items-center border border-white rounded-lg px-3 py-1 w-64">
          <input
            type="text"
            placeholder="Buscar..."
            className="bg-transparent w-full focus:outline-none text-white placeholder-gray-300"
          />
          <button className="ml-2">🔍</button>
        </div>

        {/* Botón de menú móvil */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Menú desplegable en móvil */}
      {menuOpen && (
        <nav className="md:hidden bg-[#880E4F] text-center py-3">
          <a href="#" className="block py-2 hover:underline">Acerca de nosotros</a>
          <a href="#" className="block py-2 hover:underline">Nuestros servicios</a>
          <a href="#" className="block py-2 hover:underline">Crowd Funding</a>
          <a href="#" className="block py-2 hover:underline">Apoya a emprendedor</a>
          <a href="#" className="block py-2 hover:underline">Postulaciones</a>

          {/* Barra de búsqueda en móvil */}
          <div className="flex items-center border border-white rounded-lg px-3 py-2 mx-4 mt-2">
            <input
              type="text"
              placeholder="Buscar..."
              className="bg-transparent w-full focus:outline-none text-white placeholder-gray-300"
            />
            <button className="ml-2">🔍</button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
