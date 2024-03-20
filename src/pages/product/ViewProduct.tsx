import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ResultItems } from "../../components/results-items/SearchResultItems";
import { Loader } from "../../components/loader/Loader";
import "./products.css"
export default function ViewProduct() {
    const [loading, setLoading] = useState(false);
    const params = useParams();
    const [results, setResults] = useState([]);

    async function pullResults(q: any) {
        setLoading(true);
        try {
            const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${q}&limit=30`);
            const json = await response.json();
            setResults(json.results)
        } catch (error) {
            alert(error);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        pullResults(params.query);
    }, [params]);
    return (
        <>
            <div >
                <article className="container_article">
                    {loading ? <Loader /> :
                        results.map((r: any) =>
                            <ResultItems
                                key={r.id}
                                id={r.id}
                                title={r.title}
                                picture={r.thumbnail}
                                price={r.price}
                                isItems={true}
                            />
                        )
                    }
                </article>

            </div >
        </>
    )
}
