import { useItemsCart } from "./hooks/useItemsCart";
import { NavBar } from "./components/NavBar";
import { CarRoutes } from "./routes/CarRoutes";

export const CartApp = () => {

    const { cartItems, handlerAddProductCart, handlerDeleteProductCart } = useItemsCart();

    return (
        <>
            <NavBar />
            <div className="container my-4">

                <h3>Cart App</h3>
                <CarRoutes
                    cartItems={cartItems}
                    handlerAddProductCart={handlerAddProductCart}
                    handlerDeleteProductCart={handlerDeleteProductCart}
                />
            </div>

        </>
    );
}