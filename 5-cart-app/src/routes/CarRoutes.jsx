import { Navigate, Route, Routes } from "react-router-dom"
import { CatalogView } from "../components/CatalogView"
import { CartView } from "../components/CartView"

export const CarRoutes = ({ handlerAddProductCart, handlerDeleteProductCart, cartItems, handlerUpdateQuantityManually }) => {
    return (
        <>

            <Routes>
                <Route
                    path="catalog"
                    element={<CatalogView handler={handlerAddProductCart} />}
                />
                <Route
                    path="cart"
                    element={(
                        cartItems?.length <= 0 ?
                            <div className="alert alert-warning" >No hay Productos en el carro de compras !!</div>
                            :
                            (
                                <div className="my-4 w-50">
                                    <CartView
                                        items={cartItems}
                                        handlerDelete={handlerDeleteProductCart}
                                        handlerUpdateQuantityManually={handlerUpdateQuantityManually} />
                                </div>
                            )
                    )} />

                <Route path="/" element={<Navigate to={'/catalog'} />} />
            </Routes>



        </>
    )
}
