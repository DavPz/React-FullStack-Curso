import { useEffect, useState } from "react";

export const FormItemsView = ({handler}) => {


    const [formItemsState, setFormItemState] = useState({
        product: '',
        price: '',
        quantity: '',
    });

    const { product, price, quantity } = formItemsState;

    
    useEffect(() => {
        // console.log('el precio cambio');
    }, [price]);

    useEffect(() => {
        // console.log('Cambio en el form');
    }, [formItemsState]);

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

        handler(formItemsState);

        setFormItemState({
            product: '',
            price: '',
            quantity: '',
        });

    }


    return (<>

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
    </>)
}