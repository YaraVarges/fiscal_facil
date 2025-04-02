import React from 'react';

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col px-4 justify-center items-center bg-blue-50 dark:bg-gray-900 dark:text-gray-100">
            <h1 className="text-4xl font-bold text-orange-700 text-center  dark:text-gray-100">Bem-vindo à Consulta de Códigos Fiscais</h1>
            <p className="mt-4 text-lg text-gray-700 text-justify dark:text-gray-100">
                Consulte facilmente NCM, CEST, CFOP, CST e CSOSN. Comece agora clicando no menu acima!
            </p>
        </div>
    );
    };

export default Home;
