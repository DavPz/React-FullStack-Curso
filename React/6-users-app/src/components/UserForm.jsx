import { useEffect, useState } from "react";
import { useUsers } from "../hooks/useUsers";

export const UserForm = ({ userSelected, handlerCloseForm }) => {

    const { handleAddUser, inicitalUserForm, errors } = useUsers();

    const [userForm, setUserForm] = useState(inicitalUserForm);
    const [checked, setChecked] = useState(userForm.adminRole);

    const { id, userName, password, email, adminRole } = userForm;

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

    const onCheckboxChange = () => {
        setChecked(!checked);
        setUserForm(
            {
                ...userForm,
                adminRole: checked,
            }
        )
    };

    const onSubmit = (event) => {
        event.preventDefault();

        // if (!userName || (!password && id === 0) || !email) {

        //     Swal.fire(
        //         'Error de Validacion',
        //         'Error: Campos Vacios',
        //         'error'
        //     );
        //     return;
        // }

        // if (!email.includes('@')) {
        //     Swal.fire(
        //         'Error de Validacion Email',
        //         'Error: El email debe de ser valido',
        //         'error'
        //     );
        //     return;

        // }

        handleAddUser(userForm);

    }

    const onCloseForm = () => {
        handlerCloseForm();
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
            <p className="text-danger">{errors?.userName}</p>
            {id > 0 || <input
                type="password"
                className="form-control my-3 w-75"
                placeholder="Password"
                name="password"
                value={password}
                onChange={onInputChange}
            />}
            <p className="text-danger">{errors?.password}</p>

            <input
                className="form-control my-3 w-75"
                placeholder="Email"
                name="email"
                value={email}
                onChange={onInputChange}
            />
            <p className="text-danger">{errors?.email}</p>
            <input
                type="hidden"
                name="id"
                value={id}
            />

            <div className="my-3 form-check">
                <input type="checkbox"
                    name="adminRole"
                    checked={adminRole}
                    className="form-check-input"
                    onChange={onCheckboxChange}
                />
                <label className="form-check-label">Admin Role</label>
            </div>

            <button
                className="btn btn-primary"
                type="submit"
            >
                {id > 0 ? 'Editar' : 'Crear'}
            </button>
            {!handlerCloseForm ||
                <button
                    type="button"
                    className="btn btn-secondary mx-2"
                    onClick={() => onCloseForm()}>
                    Cerrar
                </button>
            }

        </form>
    )
}
