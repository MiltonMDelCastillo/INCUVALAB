import React from "react";

const Header = () => {
  return (
    <header className="bg-[#880E4F] text-white py-3">
      <div className="container mx-auto flex justify-between items-center px-6">
      <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
            CENTRO DE EMPRENDIMIENTO UNIVALLE
          </h1>
        {/* Barra de búsqueda */}
        <div className="flex items-center border border-white rounded-lg px-3 py-1">
          <input
            type="text"
            placeholder="Buscar"
            className="bg-transparent focus:outline-none text-white placeholder-gray-300"
          />
          <button className="ml-2">
            <img 
              src="/lupa-icon.png" 
              alt="Lupa"
              className="h-5 w-5"  
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
