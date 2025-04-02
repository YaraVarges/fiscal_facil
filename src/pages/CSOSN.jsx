import React, { useState } from "react";
import SearchBar from "../components/Search"; 
import csosnData from "../data/csosnvigente.json";

const CSOSN = () => {
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

        const filtered = csosnData.filter(
        (item) =>
            item.CodigoCSOSN.replace(/\./g, "").includes(cleanedSearchTerm) ||
            item.Descricao_CSOSN.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setResults(filtered); // Atualiza os resultados no State
    };

    return (
        <div className="p-8 bg-gray-100 min-h-screen">
        <h1 className="text-2xl font-bold mb-8">Busca de CSOSN - Código de Situação da Operação no Simples Nacional</h1>
        <SearchBar onSearch={handleSearch} placeholder="Digite o código ou descrição do CSOSN" />
        <ul>
            {results.length > 0 ? (
            results.map((item, index) => (
                <li key={index} className="border-b border-gray-300 py-2">
                <strong>{formatCodigo(item.CodigoCSOSN)}</strong>: {item.Descricao_CSOSN}
                </li>
            ))
            ) : (
            <p>Nenhum resultado encontrado ainda, iniciei sua busca ou clique em buscar para visualizar todos os CSOSN!</p>
            )}
        </ul>
        </div>
    );
    };

export default CSOSN;
