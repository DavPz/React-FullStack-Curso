import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export const UserForm = ({ handleAddUser, inicitalUserForm, userSelected }) => {

    const [userForm, setUserForm] = useState(inicitalUserForm);

    const { id, userName, password, email } = userForm;

    useEffect(() => {
        setUserForm({
            ...userSelected,
            password: '',
        });

    }, [userSelected])

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setUserForm({
            ...userForm,
            [name]: value,
        })
    }

    const onSubmit = (event) => {
        event.preventDefault();

        if (!userName || (!password && id === 0) || !email) {

            Swal.fire(
                'Error de Validacion',
                'Error: Campos Vacios',
                'error'
            );
            return;
        }

        handleAddUser(userForm);

        setUserForm(inicitalUserForm);

    }

    return (
        <form onSubmit={onSubmit}>
            <input
                className="form-control my-3 w-75"
                placeholder="UserName"
                name="userName"
                value={userName}
                onChange={onInputChange}
            />
            {id > 0 || <input
                type="password"
                className="form-control my-3 w-75"
                placeholder="Password"
                name="password"
                value={password}
                onChange={onInputChange}
            />}

            <input
                className="form-control my-3 w-75"
                placeholder="Email"
                name="email"
                value={email}
                onChange={onInputChange}
            />
            <input
                type="hidden"
                name="id"
                value={id}
            />
            <button
                className="btn btn-primary"
                type="submit"
            >
                {id > 0 ? 'Editar' : 'Crear'}
            </button>
        </form>
    )
}
