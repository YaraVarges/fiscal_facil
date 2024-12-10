import React, { useState } from "react";

const SearchBar = ({ onSearch, placeholder }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = () => {
        onSearch(searchTerm);
    };

    return (
        <div className="flex items-center mb-4">
        <input
            type="text"
            className="border border-gray-400 p-2 rounded mr-2 w-full md:w-1/2"
            placeholder={placeholder || "Digite sua pesquisa"}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
            onClick={handleSearch}
            className="bg-orange-700 text-white px-4 py-2 rounded"
        >
            Buscar
        </button>
        </div>
    );
    };

export default SearchBar;
