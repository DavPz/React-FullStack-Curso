

const httpClient = fetch('http://localhost:8081/api/usuarios/obtenerUsuarios');

// httpClient.then( response  => {
//     // console.log(response);
//     response.json().then(data => {
//         console.log(data);
//     });
// });

httpClient
    .then( response => response.json())
    .then(data => console.log(data));