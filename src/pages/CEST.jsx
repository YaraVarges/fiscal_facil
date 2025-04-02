import React, { useState } from "react";
import SearchBar from "../components/Search"; 
import CESTData from "../data/cestvigente.json"; 

const CEST = () => {
    const [results, setResults] = useState([]);
    const [isDataLoaded, setIsDataLoaded] = useState(false); // Variável para controlar o carregamento dos dados do json, e não iniciar carregando todos os dados.

    // Função para formatar o código CEST com pontos, para poder receber pesquisa sem os pontos
    const formatCodigo = (codigo) => {
        return codigo.replace(/(\d{2})(\d{3})(\d{2})/, "$1.$2.$3");
    };

    // Função de pesquisa
    const handleSearch = (searchTerm) => {
        if (!isDataLoaded) {
        // Carrega os dados do JSON apenas na primeira pesquisa
        setIsDataLoaded(true);
        }

        // Remover os pontos da pesquisa
        const cleanedSearchTerm = searchTerm.replace(/\./g, "");

        const filtered = CESTData.filter(
        (item) =>
            item.CEST.replace(/\./g, "").includes(cleanedSearchTerm) ||
            item.Descricao_CEST.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setResults(filtered); // Atualiza os resultados no State
    };

    return (
        <div className="p-8 bg-gray-100 min-h-screen dark:bg-gray-900 dark:text-gray-100">
        <h1 className="text-2xl font-bold mb-8">Busca de CEST - Código Especificador da Substituição Tributária</h1>
        <SearchBar onSearch={handleSearch} placeholder="Digite o código ou descrição" />
        <ul>
            {results.length > 0 ? (
            results.map((item, index) => (
                <>
                    <li key={index} className="border-b border-gray-300 py-2">
                    <strong>Segmento</strong>: {item.Segmento_CEST} <br />
                    <strong>CEST {formatCodigo(item.CEST)}</strong>: {item.Descricao_CEST}
                    </li>
                </>
                
                
            ))
            ) : (
            <p>Nenhum resultado encontrado ainda, iniciei sua busca!</p>
            )}
        </ul>
        </div>
    );
    };

export default CEST;
