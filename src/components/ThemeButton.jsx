import { useState, useEffect } from "react";

export const ThemeButton = () => {
    const [darkMode, setDarkMode] = useState(() => {
        // Verifica preferência salva ou do sistema
        if (typeof window !== "undefined") {
        const saved = localStorage.getItem("darkMode");
        return saved
            ? JSON.parse(saved)
            : window.matchMedia("(prefers-color-scheme: dark)").matches;
        }
        return false;
    });

    useEffect(() => {
        // Aplica o tema
        if (darkMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("darkMode", "true");
        } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("darkMode", "false");
        }
    }, [darkMode]);

    return (
        <button
        onClick={() => setDarkMode(!darkMode)}
        className="flex items-center justify-center w-10 h-10 -mt-2 ml-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors"
        aria-label={darkMode ? "Desativar modo escuro" : "Ativar modo escuro"}
        >
        {darkMode ? (
            <span className="text-yellow-300">☀️</span> 
        ) : (
            <span className="text-gray-600">🌙</span> 
        )}
        </button>
    );
};
