import React from "react";

const Header = () => {
    return (
        <header className="bg-amber-700 text-white py-4 px-6 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">Fiscal Fácil</h1>
            <nav>
            <a href="/" className="text-white hover:underline mx-4">
                Home
            </a>
            <a href="/ncm" className="text-white hover:underline mx-4">
                NCM
            </a>
            <a href="/cest" className="text-white hover:underline mx-4">
                CEST
            </a>
            <a href="/cfop" className="text-white hover:underline mx-4">
                CFOP
            </a>
            <a href="/csticms" className="text-white hover:underline mx-4">
                CST
            </a>
            <a href="/csosn" className="text-white hover:underline mx-4">
                CSOSN
            </a>
            <a href="/dicas" className="text-white hover:underline mx-4">
                Dicas
            </a>
            </nav>
        </div>
        </header>
    );
    };

export default Header;
