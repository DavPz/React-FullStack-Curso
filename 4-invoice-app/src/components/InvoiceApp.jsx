import { getInvoice } from "../services/getInvoice"

export const InvoiceApp = () => {

    const { id, name, client, company, items } = getInvoice();
    const { name: nameClient, lastName, address } = client;
    const { country, city, state, street, number } = address;

    return (

        <>
            <h1>Ejemplo Factura</h1>
            <ul>
                <li>Id: {id}</li>
                <li>Name: {name}</li>
            </ul>

            <h3>Datos del cliente</h3>

            <ul>
                <li>{nameClient} {lastName}</li>
                <li>{street} {number}</li>
                <li>{city}, {state}</li>
                <li>{country}</li>
            </ul>

            <h3>Datos de la Empresa</h3>
            <ul>
                <li>{company.name}</li>
                <li>{company.fiscalNumber}</li>
            </ul>

            <h4>Productos de la Factura</h4>
            <table>
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(({ id, product, price, quantity }) => (
                        <tr key={id}>
                            <td>{product}</td>
                            <td>{price}</td>
                            <td>{quantity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </>
    )
}