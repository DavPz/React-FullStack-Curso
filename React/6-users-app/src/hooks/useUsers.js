import { useReducer, useState } from "react";
import Swal from "sweetalert2";
import { usersReducer } from "../reducers/usersReducer";
import { useNavigate } from "react-router-dom";

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
    const [visibleForm, setVisibleForm] = useState(false);
    const navigate = useNavigate();

    const handleAddUser = (user) => {

        dispatch({
            type: (user.id === 0) ? 'addUser' : 'updateUser',
            payload: user,
        });

        Swal.fire(
            (user.id === 0) ? 'Usuario Creado' : 'Usuario Actualizado',
            (user.id === 0) ? 'El Usuario ha sido creado con exito!!' : 'El usuario ha sido Actualizado Correctamente',
            'success'
        );

        handlerCloseForm();
        navigate("/users");

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
        setVisibleForm(true);
        setUserSelected({ ...user });
    }

    const handlerOpenForm = () =>{
        setVisibleForm(true);
    }

    const handlerCloseForm = () =>{
        setVisibleForm(false);
        setUserSelected(inicitalUserForm);
    }

    return {
        users,
        userSelected,
        inicitalUserForm,
        visibleForm,
        handleAddUser,
        handleRemoveUser,
        handlerUserSelectedForm,
        handlerOpenForm,
        handlerCloseForm,
    }



}
