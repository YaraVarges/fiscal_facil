import React, { useEffect, useState } from "react";
import SearchBar from "../components/Search"; 
import cfopData from "../data/cfopvigente.json"; 

const CFOP = () => {
    const [results, setResults] = useState([]);
    const [isDataLoaded, setIsDataLoaded] = useState(false); // Variável para controlar o carregamento dos dados do json, e não iniciar carregando todos os dados.

    // Função para formatar o código CFOP com pontos, para poder receber pesquisa sem os pontos
    const formatCodigo = (codigo) => {
        return codigo.replace(/(\d{1})(\d{3})/, "$1.$2");
    };

    // Função de pesquisa
    const handleSearch = (searchTerm) => {
        if (!isDataLoaded) {
        // Carrega os dados do JSON apenas na primeira pesquisa
        setIsDataLoaded(true);
        }

        // Remover os pontos da pesquisa
        const cleanedSearchTerm = searchTerm.replace(/\./g, "");

        const filtered = cfopData.filter(
        (item) =>
            item.cfop.replace(/\./g, "").includes(cleanedSearchTerm) ||
            item.descricao.toLowerCase().includes(searchTerm.toLowerCase()) || item.tipooperacao.toLowerCase().includes(searchTerm.toLowerCase()) 
        );
        setResults(filtered); // Atualiza os resultados no State
    };

    return (
        <div className="p-8 bg-gray-100 min-h-screen">
        <h1 className="text-2xl font-bold mb-8">Busca de CFOP - Código Fiscal de Operações e de Prestações</h1>
        <SearchBar onSearch={handleSearch} placeholder="Digite o código ou descrição do CFOP" />
        <ul>
            {results.length > 0 ? (
            results.map((item, index) => (
                <>
                <li key={index} className="mt-4 py-2">
                <strong>CFOP {formatCodigo(item.cfop)}</strong>: {item.descricao}
                </li>
                <li key={index} className="py-2">
                <strong>Descrição: </strong>{item.observacao}
                </li>
                <li key={index} className="py-2">
                <strong>Tipo de Operação: </strong>{item.tipooperacao}
                </li>
                <li key={index} className="border-b border-gray-400 py-2">
                <strong>Destino de Operação:</strong> {item.identificadordestinooperacao}
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

export default CFOP;
