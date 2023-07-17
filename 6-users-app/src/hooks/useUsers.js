import { useReducer, useState } from "react";
import { usersReducer } from "../reducers/usersReducer";

const inictialUsers = [
    {
        id: 1,
        userName: 'pepe',
        password: '12345',
        email: 'pepe@correo.com'
    },
];

const inicitalUserForm = {
    id: 0,
    userName: '',
    password: '',
    email: '',
};

export const useUsers = () => {

    const [users, dispatch] = useReducer(usersReducer, inictialUsers);
    const [userSelected, setUserSelected] = useState(inicitalUserForm);

    const handleAddUser = (user) => {

        let type;

        if (user.id === 0) {
            type = 'addUser';
        } else {
            type = 'updateUser';
        }

        dispatch({
            type,
            payload: user,
        })
    }

    const handleRemoveUser = (id) => {
        dispatch({
            type: 'removeUser',
            payload: id,
        })
    }

    const handlerUserSelectedForm = (user) => {
        // console.log(user);
        setUserSelected({ ...user });
    }

    return {
        users,
        userSelected,
        inicitalUserForm,
        handleAddUser,
        handleRemoveUser,
        handlerUserSelectedForm
    }


}
