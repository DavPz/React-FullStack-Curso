import { useEffect, useState } from "react";
import { getInvoice } from "./services/getInvoice"
import { ClientView } from "./components/ClientView";
import { CompanyView } from "./components/CompanyView";
import { InvoiceView } from "./components/InvoiceView";
import { ListItemsView } from "./components/ListItemsView";
import { TotalView } from "./components/TotalView";


const invoiceInitial = {

    id: 0,
    name: '',
    client: {
        name: '',
        lastName: '',
        address: {
            country: '',
            state: '',
            city: '',
            street: ' ',
            number: 0
        }
    },
    company: {
        name: '',
        fiscalNumber: 0,
    },
    items: [],

};

export const InvoiceApp = () => {

    const [invoice, setInvoice] = useState(invoiceInitial);

    const [items, setItems] = useState([]);

    const [formItemsState, setFormItemState] = useState({
        product: '',
        price: '',
        quantity: '',
    });

    const { total, id, name, client, company } = invoice;

    const [counter, setCounter] = useState(4);

    useEffect(() => {
        const data = getInvoice();
        setInvoice(data);
        console.log(data);
        setItems(data.items);
    }, []);

    const { product, price, quantity } = formItemsState;

    useEffect(() => {
        // console.log('el precio cambio');
    }, [price]);

    useEffect(() => {
        // console.log('Cambio en el form');
    }, [formItemsState]);

    useEffect(() => {
        // console.log('Counter va en '+counter);
    }, [counter]);

    useEffect(() => {
         console.log('cambio el item '+counter);
    }, [items]);


    const onInpuChange = ({ target: { name, value } }) => {
        {
            setFormItemState({
                ...formItemsState,
                [name]: value,
            });
        }
    }

    const onVoiceItemsSubmit = (event) => {
        event.preventDefault();

        if (product.trim().length <= 1) return;
        if (price.trim().length <= 1) return;
        if (isNaN(price.trim())) {
            alert('Error: El precio no es numero');
            return
        };
        if (quantity.trim().length < 1) {
            alert('Error: La cantidad debe de ser mayor a 1');
            return
        };
        if (isNaN(quantity.trim())) {
            alert('Error: La cantidad no es un numero');
            return
        };


        setItems([...items, {
            id: counter,
            product: product.trim(),
            price: +price.trim(),
            quantity: parseInt(quantity.trim(), 10)
        }])

        setFormItemState({
            product: '',
            price: '',
            quantity: '',
        });

        setCounter(counter + 1);
    }

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

                        <form className="w-50" onSubmit={event => onVoiceItemsSubmit(event)}>
                            <input
                                type="text"
                                name="product"
                                value={product}
                                placeholder="Producto" className="form-control m-3" onChange={onInpuChange} />
                            <input
                                type="text"
                                name="price"
                                value={price}
                                placeholder="Precio" className="form-control m-3" onChange={event => onInpuChange(event)} />
                            <input
                                type="text"
                                name="quantity"
                                value={quantity}
                                placeholder="Cantidad" className="form-control m-3" onChange={onInpuChange} />

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