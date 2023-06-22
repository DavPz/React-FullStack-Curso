
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

const invoiceByClientName = (clientName) =>{
    return invoices.find( i => i.client.name == clientName);
};

const invoiceById = (id) => {
    return invoices.find(i => i.id == id);
};

const findInvoiceById = (id) => {
    const promise = new Promise((resolve, reject) => {

        setTimeout(() => {
            const result = invoiceById(id);
            // console.log(result);
            if (result) {
                resolve(result);
            } else {
                reject('Error: recurso no encontrador');
            }
        }, 2500);
    
    });

    return promise;
};

export{
    invoices,
    invoiceByClientName,
    invoiceById,
    findInvoiceById
}

