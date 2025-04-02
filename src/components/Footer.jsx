import React from "react";

const Footer = () => {
    return (
        <footer className="bg-amber-900 text-white py-6">
        <div className="container mx-auto text-center">
            <p>Fiscal Fácil © {new Date().getFullYear()}. Todos os direitos reservados. Desenvolvido por <a href="https://yaravarges.com.br" target="_blank" rel="noreferrer noopener">Yara Varges.</a></p>
        </div>
        </footer>
    );
    };

export default Footer;
