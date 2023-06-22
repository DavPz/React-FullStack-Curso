
const invoices = [
    {
        id: 1,
        name: 'compras de oficina',
        client: {
            name: 'Alberto',
            lastname: 'Doe',
        },

        items: [
            {
                producto: 'keyboard',
                price: 125,
                quantity: 2,
            },
            {
                producto: 'mouse',
                price: 25,
                quantity: 40,
            },
            {
                producto: 'paper',
                price: 10,
                quantity: 20,
            },
        ]

    },

    {
        id: 2,
        name: 'compras de computacion',
        client: {
            name: 'Pepe',
            lastname: 'Doe',
        },

        items: [
            {
                producto: 'keyboard',
                price: 125,
                quantity: 2,
            },
            {
                producto: 'monitor 17',
                price: 700,
                quantity: 2,
            },
            {
                producto: 'chase',
                price: 150,
                quantity: 4,
            },
        ]

    },
    {
        id: 3,
        name: 'compras de papeleria',
        client: {
            name: 'Maria',
            lastname: 'Doe',
        },

        items: [
            {
                producto: 'pen',
                price: 5,
                quantity: 200,
            },
            {
                producto: 'pencil',
                price: 2,
                quantity: 400,
            },
            {
                producto: 'paper',
                price: 10,
                quantity: 20,
            },
        ]

    }
];

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
