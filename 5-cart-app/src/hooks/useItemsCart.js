import { useEffect, useReducer } from "react";
import { AddProductCart, DeleteProductCart, UpdateQuantityManually, UpdateQuantityProductCart } from "../reducer/itemsActions";
import { itemsReducer } from "../reducer/itemsReducer";

const initialCartItems = JSON.parse(sessionStorage.getItem('cart')) || [];

export const useItemsCart = () => {

    const [cartItems, dispatch] = useReducer(itemsReducer, initialCartItems);

    useEffect(() => {
        sessionStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]
    );

    const handlerAddProductCart = (product) => {

        const hasItem = cartItems.find((i) => i.product.id === product.id);
        if (hasItem) {

            dispatch(
                {
                    type: UpdateQuantityProductCart,
                    payload: product,
                }
            );

        } else {

            dispatch(
                {
                    type: AddProductCart,
                    payload: product,

                }
            );
        }
    };

    const handlerDeleteProductCart = (id) => {
        dispatch(
            {
                type: DeleteProductCart,
                payload: id,
            }
        )
    };

    const handlerUpdateQuantityManually = (id, valor) => {
        dispatch(
            {
                type: UpdateQuantityManually,
                payload: {
                    id,
                    valor
                }
            }
        )
    }


    return {
        cartItems,
        handlerAddProductCart,
        handlerDeleteProductCart,
        handlerUpdateQuantityManually,
    }
}