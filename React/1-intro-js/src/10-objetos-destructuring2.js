

const user = {
    userName: 'andres',
    email: 'core@core.com',
    age: '20',
    ranking: 9,
}

const detail = (user) =>{
    const {userName, email } = user;
    console.log(`El detalle del usuario ${userName} con correo ${email}`);
}

const detail2 = ({userName, email }) =>{
    console.log(`El detalle2 del usuario ${userName} con correo ${email}`);
}

// detail(user);
detail2(user);