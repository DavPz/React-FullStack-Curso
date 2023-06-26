export const invoice = {

    id: 10,
    name: 'Componentes PC',
    client: {
        name: 'Pepe',
        lastName: 'Doe',
        address: {
            country: 'USA',
            state: 'CA',
            city: 'Los Angeles',
            street: 'One Street',
            number: 12
        }
    },
    company: {
        name: 'New Egg',
        fiscalNumber: 45678921,
    },
    items: [
        {
            id: 1,
            product: 'CPU I7',
            price: 600,
            quantity: 1,
        },
        {
            id: 2,
            product: 'Corsair Keyboard',
            price: 300,
            quantity: 1,
        },
        {
            id: 3,
            product: 'Monitor Azus 144hz',
            price: 450,
            quantity: 1,
        },

    ],

}