const users = ['pepe','ana', 'maria', 'juan', 'sebastian'];

const [pepe, b, maria, ...c] = users; 

console.log(pepe,b, maria, ...c)