import React from "react";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <main className="p-6">
     
         {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/Logo.png" 
            alt="Logo"
            className="h-10 w-auto"
          />
          
        </div>
                {/* Barra de navegación */}
        <nav className="hidden md:flex space-x-6 text-sm">
          <a href="#" className="hover:underline">Acerca de nosotros</a>
          <a href="#" className="hover:underline">Nuestros servicios</a>
          <a href="#" className="hover:underline">Crowd Funding</a>
          <a href="#" className="hover:underline">Apoya a emprendedor</a>
          <a href="#" className="hover:underline">Postulaciones</a>
        </nav>
      </main>
    </div>
    
  );
}

export default App;
