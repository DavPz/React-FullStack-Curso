const invoice = {
    id: 10,
    name: 'compras de oficina',
    date: new Date(),
    client: {
        id: 2,
        name: 'Alberto',
        lastname: 'Doe',
    },
    greetings: function (text) {
        console.log(`${text} ${this.client.name}`);
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
    ],
    total: function () {
        let total = 0;
        this.items.forEach(item => {
            total = total + item.price * item.quantity;
        });
        return total;
    },

}


// const invoice2 = invoice; // referencia por memoria
const invoice2 = { ...invoice }; // clonar operador spread

// invoice2.id= 10;

const result = invoice == invoice2;

if (result) {
    console.log(result);
} else {
    console.log(result);
}