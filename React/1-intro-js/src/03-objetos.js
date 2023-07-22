
const invoice = {
    id: 10,
    name: 'compras de oficina',
    date: new Date(),
    client: {
        id: 2,
        name: 'Alberto',
        lastname: 'Doe',
    },    
    greetings: function(text){
        console.log( `${text} ${this.client.name}`);
    },

    items: [
        {
            producto:'keyboard',
            price:125,
            quantity:2,
        },
        {
            producto:'mouse',
            price:25,
            quantity:40,
        },
        {
            producto:'paper',
            price:10,
            quantity:20,
        },
    ],
    total: function(){
        let total = 0;
        this.items.forEach(item => {
            total = total + item.price * item.quantity; 
        });
        return total;
    },

}


console.log(invoice);

invoice.greetings(`Hola mundo` );
console.log(`Total:  ${invoice.total()}`)
