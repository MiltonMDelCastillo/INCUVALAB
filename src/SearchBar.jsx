import { useState } from "react";

const data = [
  { id: 1, type: "Noticia", title: "Nueva convocatoria de emprendimiento" },
  { id: 2, type: "Evento", title: "Hackathon Univalle 2024" },
  { id: 3, type: "Mentor", title: "Carlos Pérez - Experto en startups" },
];

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    const filtered = data.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered);
  };

  return (
    <div className="w-full max-w-lg mx-auto p-2">
      <div className="flex border rounded-lg overflow-hidden shadow-sm">
        <input
          type="text"
          placeholder="Buscar noticias, eventos o mentores..."
          className="flex-grow p-2 outline-none"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className="bg-red-600 text-white px-4 py-2"
          onClick={handleSearch}
        >
          Buscar
        </button>
      </div>

      <div className="mt-3 bg-white shadow rounded-lg p-2">
        {results.length > 0 ? (
          results.map((item) => (
            <p key={item.id} className="p-2 border-b last:border-0">
              <strong>{item.type}:</strong> {item.title}
            </p>
          ))
        ) : (
          query && <p className="text-gray-500 p-2">No hay resultados para "{query}"</p>
        )}
      </div>
    </div>
  );
}
