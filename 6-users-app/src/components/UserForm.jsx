import { useState } from "react";

export const UserForm = () => {

    const inicitalUserForm = {
        userName: '',
        password: '',
        email: '',
    };
    const [userForm, setUserForm] = useState(inicitalUserForm);

    const { userName, password, email } = userForm;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setUserForm({
            ...userForm,
            [name]: value,
        })
    }

const onSubmit = (event) => {
    event.preventDefault();
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
            <input
                type="password"
                className="form-control my-3 w-75"
                placeholder="Password"
                name="password"
                value={password}
                onChange={onInputChange}
            />
            <input
                className="form-control my-3 w-75"
                placeholder="Email"
                name="email"
                value={email}
                onChange={onInputChange}
            />
            <button
                className="btn btn-primary"
                type="submit"
            >
                Crear
            </button>
        </form>
    )
}
