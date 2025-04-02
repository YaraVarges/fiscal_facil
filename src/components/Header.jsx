import React, { useState } from "react";
import { ThemeButton } from "./ThemeButton";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-amber-700 dark:bg-amber-900 text-white p-4 px-6 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">
            <a href="/">Fiscal Fácil</a>
            </h1>

            {/* Botão Hamburguer (visível apenas em mobile) */}
            <button
            className="md:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            >
            <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                {isMenuOpen ? (
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                />
                ) : (
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                />
                )}
            </svg>
            </button>

            {/* Menu Desktop (visível a partir de md) */}
            <nav className="hidden md:flex">
            <NavLinks />
            </nav>
        </div>

        {/* Menu Mobile (aparece quando isMenuOpen = true) */}
        {isMenuOpen && (
            <div className="md:hidden bg-amber-600">
            <nav className="flex flex-col px-6 py-4 space-y-3">
                <NavLinks mobile />
            </nav>
            </div>
        )}
        </header>
    );
    };

    // Componente auxiliar para os links (evita repetição)
    const NavLinks = ({ mobile = false }) => {
    const linkClasses = mobile
        ? "block py-2 hover:underline"
        : "text-white hover:underline mx-4";

    return (
        <>
        <a href="/" className={linkClasses}>
            Home
        </a>
        <a href="/ncm" className={linkClasses}>
            NCM
        </a>
        <a href="/cest" className={linkClasses}>
            CEST
        </a>
        <a href="/cfop" className={linkClasses}>
            CFOP
        </a>
        <a href="/csticms" className={linkClasses}>
            CST
        </a>
        <a href="/csosn" className={linkClasses}>
            CSOSN
        </a>
        <ThemeButton />
        </>
        
    );
};

export default Header;
