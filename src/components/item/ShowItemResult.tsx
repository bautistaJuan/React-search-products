import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ResultItems } from '../results-items/SearchResultItems';
import { Loader } from '../loader/Loader';



export default function Item() {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(false);
    const { itemId } = useParams();
    const fetchProduct = async (productId: any) => {
        setLoading(true);
        try {
            const response = await fetch(`https://api.mercadolibre.com/items/${productId}`);
            const json = await response.json();
            setProduct(json);
        } catch (error) {
            console.error('Error fetching product:', error);
        } finally {
            setLoading(false)
        }
    };
    useEffect(() => {
        fetchProduct(itemId);
    }, [itemId]);
    console.log(product);

    const { id, title, pictures, price, attributes }: any = product;

    return (
        <div>
            {loading ? <Loader /> :
                <ResultItems
                    id={id}
                    title={title}
                    pictures={pictures
                    }
                    price={price}
                    attributes={attributes}
                    isItems={false}
                />
            }
        </div>
    );
};

