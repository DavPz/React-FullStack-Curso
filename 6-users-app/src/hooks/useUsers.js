import { useReducer, useState } from "react";
import Swal from "sweetalert2";
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
        });

        Swal.fire(
            (user.id === 0) ? 'Usuario Creado' : 'Usuario Actualizado',
            (user.id === 0) ? 'El Usuario ha sido creado con exito!!' : 'El usuario ha sido Actualizado Correctamente',
            'success'
        )

    }

    const handleRemoveUser = (id) => {


        Swal.fire({
            title: 'Esta seguro que desea eliminar el Usuario?',
            text: "NO prodra recuperar el usuario eliminado",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Eliminar'
        }).then((result) => {
            if (result.isConfirmed) {

                dispatch({
                    type: 'removeUser',
                    payload: id,
                });

                Swal.fire(
                    'Uusario Eliminado!',
                    'El Usuario Ha sido eliminado con Exito.',
                    'success'
                )
            }
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
