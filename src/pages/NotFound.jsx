export default function NotFound() {
    return (
        <div className="text-center py-20">
            <h1 className="text-4xl font-bold text-amber-700">404</h1>
            <p className="text-xl mt-4">Página não encontrada!</p>
            <a
                href="/"
                className="mt-6 inline-block bg-amber-600 text-white px-6 py-2 rounded-lg"
            >
                Voltar para Home
            </a>
        </div>
    );
}
