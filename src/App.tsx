import { useState } from "react";
import { SearchForm } from "./components/search-form/SearchForm";
import { ResultItems } from "./components/results-items/SearchResultItems";
import { Loader } from "./components/loader/Loader";
import "./app.css"
function App() {
    const [loading, setLoading] = useState(false); // Estado para controlar la carga
    const [results, setResults] = useState([]);

    let handleSearch = async (title: string) => {
        setLoading(true); // Inicia la carga
        try {
            const data = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${title}&limit=50`);
            const products = await data.json();
            setResults(products.results);
        } catch (error) {
            console.error("Error al obtener datos de la API:", error);
        } finally {
            setLoading(false); // Finaliza la carga, independientemente del resultado
        }
    };

    return (<>
        <SearchForm onSearch={handleSearch} />
        <div className="container">
            <article className="container_article">
                {loading ? (
                    <Loader />
                ) : (
                    results.map((r: any) =>
                        <ResultItems
                            key={r.id}
                            title={r.title}
                            picture={r.thumbnail}
                            price={r.price}
                            linkTo={r.permalink}
                        />
                    )
                )}
            </article>
        </div>
    </>)
}

export { App };
