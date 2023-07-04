import { useState } from "react";
import { getInvoice } from "./services/getInvoice"
import { ClientView } from "./components/ClientView";
import { CompanyView } from "./components/CompanyView";
import { InvoiceView } from "./components/InvoiceView";
import { ListItemsView } from "./components/ListItemsView";
import { TotalView } from "./components/TotalView";


export const InvoiceApp = () => {

    const { total, id, name, client, company, items: itemsInitial } = getInvoice();

    const [productValue, setProductValue] = useState('');
    const [priceValue, setPriceValue] = useState('');
    const [quantityValue, setQuantityValue] = useState('');

    const [items, setItems] = useState(itemsInitial);

    const [counter, setCounter] = useState(4);

    return (

        <>
            <div className="container">

                <div className="card my-3">

                    <div className="card-header">
                        Ejemplo Factura
                    </div>
                    <div className="card-body">

                        <InvoiceView id={id} name={name} />

                        <div className="row my-3">

                            <div className="col">
                                <ClientView title={'Datos del cliente'} client={client} />
                            </div>

                            <div className="col">
                                <CompanyView title={'Datos de la Empresa'} company={company} />
                            </div>

                        </div>

                        <ListItemsView title={'Productos de la Factura'} items={items} />
                        <TotalView total={total} />

                        <form className="w-50" onSubmit={event => {
                            event.preventDefault();

                            if (productValue.trim().length <= 1) return;
                            if (priceValue.trim().length <= 1) return;
                            if (quantityValue.trim().length < 1) return;
                                                                                 

                            setItems([...items, {
                                id: counter,
                                product: productValue,
                                price: +priceValue,
                                quantity: parseInt(quantityValue, 10)
                            }])

                            setProductValue('');
                            setPriceValue('');
                            setQuantityValue('');

                            setCounter(counter + 1);
                        }}>
                            <input
                                type="text"
                                name="product"
                                value={productValue}
                                placeholder="Producto" className="form-control m-3" onChange={
                                    event => {
                                        setProductValue(event.target.value);
                                    }} />
                            <input
                                type="text"
                                name="price"
                                value={priceValue}
                                placeholder="Precio" className="form-control m-3" onChange={
                                    event => {
                                        setPriceValue(event.target.value);
                                    }} />
                            <input
                                type="text"
                                name="quantity"
                                value={quantityValue}
                                placeholder="Cantidad" className="form-control m-3" onChange={
                                    event => {
                                        setQuantityValue(event.target.value);
                                    }} />

                            <button
                                type="submit"
                                className="btn btn-primary m-3">
                                Nuevo Item
                            </button>
                        </form>

                    </div>

                </div>

            </div>

        </>
    )
}