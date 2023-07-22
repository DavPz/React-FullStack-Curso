



// httpClient
//     .then( response => response.json())
//     .then(data => console.log(data));

const findAllUsers = async () => {
    const response = await fetch('http://localhost:8081/api/usuarios/obtenerUsuarios');
    return await response.json();
}

const users = await findAllUsers();

console.log(users);