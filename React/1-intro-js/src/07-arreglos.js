

const products = ['mesa', 'silla', 'notebook', 'teclado'];

products.push('pantalla', 'Barra de audio');

console.log(products);

products.forEach(item => console.log(item));

for(const prod of products){
    console.log(prod);
}

for (let i = 0; i < products.length; i++) {
    const element = products[i];
    console.log(element);   
}
