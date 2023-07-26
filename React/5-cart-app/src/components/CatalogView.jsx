import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import { ProducCardView } from "./ProducCardView";

export const CatalogView = ({ handler }) => {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const findAll = async () => {
        const prods = await getProducts();
        setProducts(prods);
        setIsLoading(false);
    }

    useEffect(
        () => {
            findAll();
        }, []);

    return (
        <>

            {
                isLoading &&
                <div className="text-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            }
            <div className="row">
                {products.map(product => (
                    <div className="col-4 my-2" key={product.id}>
                        <ProducCardView
                            id={product.id}
                            name={product.name}
                            description={product.description}
                            price={product.price}
                            handler={handler}
                        />
                    </div>
                ))}
            </div>

        </>
    );
}