import { findInvoiceById } from './data/invoices';


findInvoiceById(1).then((result) => {
    console.log('Peticion Realizada con Exito');
    console.log(result);
}).catch((e) => {
    console.error(e);
}).finally(() => console.log('Proceso Terminado.'));







