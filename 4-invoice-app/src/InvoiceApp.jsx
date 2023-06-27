import { getInvoice } from "./services/getInvoice"
import { ClientView } from "./components/ClientView";
import { CompanyView } from "./components/CompanyView";
import { InvoiceView } from "./components/InvoiceView";
import { ListItemsView } from "./components/ListItemsView";
import { TotalView } from "./components/TotalView";

export const InvoiceApp = () => {

    const { total, id, name, client, company, items } = getInvoice();

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
                    </div>

                </div>

            </div>

        </>
    )
}