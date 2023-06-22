



// httpClient
//     .then( response => response.json())
//     .then(data => console.log(data));

const findAllUsers = async () => {
    const response = await fetch('http://localhost:8081/api/usuarios/obtenerUsuarios');
    const users = await response.json();

    const ul = document.createElement('ul');

    console.log(users)

    users.forEach(user => {
        const li = document.createElement('li');
        li.innerText = user.usuario;
        ul.append(li);
        console.log(user.usuario);
    });

    document.getElementById('root').append(ul);
}

const users = await findAllUsers();

console.log(users);