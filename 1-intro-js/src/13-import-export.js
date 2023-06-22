import d, {invoices, invoiceByClientName } from './data/invoices';

const invoicesName = invoices.map(i => {
    return i.name;
});

const invoicesClient = invoices.map(i => {
    return i.client;
});

console.log(invoicesName);
console.log(invoicesClient);

const invoiceById = invoices.find(i => i.id == 3);

console.log(invoiceById);

const invoiceFilter = invoices.filter( i => i.id > 1 );

console.log(invoiceFilter);

const invoiceDeleted = invoices.filter( i => i.id != 2 );

console.log(invoiceDeleted);

const result = invoices.some( i => i.client.name =='Pepe');
console.log(result)

console.log(invoiceByClientName('Maria'));

console.log(d('Maria'));
