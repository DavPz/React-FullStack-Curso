import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import { ProducCardView } from "./ProducCardView";

export const CatalogView = ({ handler }) => {

    const [products, setProducts] = useState([]);

    useEffect(
        () => {
            setProducts(getProducts);
        }, []);

    return (
        <>

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