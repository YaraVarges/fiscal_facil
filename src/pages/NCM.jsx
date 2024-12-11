import React, { useState } from "react";
import SearchBar from "../components/Search"; 
import ncmData from "../data/ncmvigente.json"; 

const NCM = () => {
    const [results, setResults] = useState([]);
    const [isDataLoaded, setIsDataLoaded] = useState(false); // Variável para controlar o carregamento dos dados do json, e não iniciar carregando todos os dados.

    // Função para formatar o código NCM com pontos, para poder receber pesquisa sem os pontos
    const formatCodigo = (codigo) => {
        return codigo.replace(/(\d{4})(\d{2})(\d{2})/, "$1.$2.$3");
    };

    // Função de pesquisa
    const handleSearch = (searchTerm) => {
        if (!isDataLoaded) {
        // Carrega os dados do JSON apenas na primeira pesquisa
        setIsDataLoaded(true);
        }

        // Remover os pontos da pesquisa
        const cleanedSearchTerm = searchTerm.replace(/\./g, "");

        const filtered = ncmData.Nomenclaturas.filter(
        (item) =>
            item.Codigo.replace(/\./g, "").includes(cleanedSearchTerm) ||
            item.Descricao.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setResults(filtered); // Atualiza os resultados no State
    };

    return (
        <div className="p-8 bg-gray-100 min-h-screen">
        <h1 className="text-2xl font-bold mb-8">Busca de NCM - Nomenclatura Comum do Mercosul</h1>
        <SearchBar onSearch={handleSearch} placeholder="Digite o código ou descrição do NCM" />
        <ul>
            {results.length > 0 ? (
            results.map((item, index) => (
                <li key={index} className="border-b border-gray-300 py-2">
                <strong>{formatCodigo(item.Codigo)}</strong>: {item.Descricao}
                </li>
            ))
            ) : (
            <p>Nenhum resultado encontrado ainda, iniciei sua busca!</p>
            )}
        </ul>
        </div>
    );
    };

export default NCM;
