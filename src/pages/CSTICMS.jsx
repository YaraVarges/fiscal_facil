import React, { useState } from "react";
import SearchBar from "../components/Search"; 
import cstData from "../data/csticmsvigente.json";

const CSTICMS = () => {
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

        const filtered = cstData.filter(
        (item) =>
            item.CodigoCST.replace(/\./g, "").includes(cleanedSearchTerm) ||
            item.Descricao_CST.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setResults(filtered); // Atualiza os resultados no State
    };

    return (
        <div className="p-8 bg-gray-100 min-h-screen">
        <h1 className="text-2xl font-bold mb-8">Busca de CST - Código da Situação Tributária</h1>
        <SearchBar onSearch={handleSearch} placeholder="Digite o código ou descrição do CST" />
        <ul>
            {results.length > 0 ? (
            results.map((item, index) => (
                <li key={index} className="border-b border-gray-300 py-2">
                <strong>{formatCodigo(item.CodigoCST)}</strong>: {item.Descricao_CST}
                </li>
            ))
            ) : (
            <p>Nenhum resultado encontrado ainda, iniciei sua busca!</p>
            )}
        </ul>
        </div>
    );
    };

export default CSTICMS;
