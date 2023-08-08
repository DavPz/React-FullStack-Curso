import { useContext, useReducer, useState } from "react";
import Swal from "sweetalert2";
import { usersReducer } from "../reducers/usersReducer";
import { useNavigate } from "react-router-dom";
import { deleteUser, finAll, save, updateUser } from "../services/userService";
import { AuthContext } from "../auth/context/AuthContext";

const inictialUsers = [];

const inicitalUserForm = {
    id: 0,
    userName: '',
    password: '',
    email: '',
    adminRole: false,
};

const inicitalErrors = {
    userName: '',
    password: '',
    email: '',
};

export const useUsers = () => {

    const [users, dispatch] = useReducer(usersReducer, inictialUsers);
    const [userSelected, setUserSelected] = useState(inicitalUserForm);
    const [visibleForm, setVisibleForm] = useState(false);

    const [errors, setErrors] = useState(inicitalErrors);
    const navigate = useNavigate();

    const { handlerLogout } = useContext(AuthContext);

    const getUsers = async () => {
        const result = await finAll();
        console.log(result.data);
        dispatch({            
            type: 'loadingUsers',
            payload: result.data,
        })
    };

    const handleAddUser = async (user) => {

        let response;

        try {

            if (user.id === 0) {
                response = await save(user);
            } else {
                response = await updateUser(user);
            }

            dispatch({
                type: (user.id === 0) ? 'addUser' : 'updateUser',
                payload: response.data,
            });

            Swal.fire(
                (user.id === 0) ? 'Usuario Creado' : 'Usuario Actualizado',
                (user.id === 0) ? 'El Usuario ha sido creado con exito!!' : 'El usuario ha sido Actualizado Correctamente',
                'success'
            );

            handlerCloseForm();
            navigate("/users");

        } catch (error) {
            if (error.response && error.response.status == 400) {
                setErrors(error.response.data);

            } else if (error.response && error.response.status == 500 &&
                error.response.data?.message?.includes('constraint')) {

                if (error.response.data?.message?.includes('UK_username')) {
                    setErrors({
                        userName: 'El Usename Ya existe!'
                    })
                } else if (error.response.data?.message?.includes('UK_email')) {
                    setErrors({
                        email: 'El email Ya existe!'
                    })
                }

            } else if (error.response?.status == 401) {
                handlerLogout();
            } else {
                throw error;
            }
        }

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
        }).then( async (result) => {
            if (result.isConfirmed) {

                try {

                    await deleteUser(id);

                    dispatch({
                        type: 'removeUser',
                        payload: id,
                    });

                    Swal.fire(
                        'Uusario Eliminado!',
                        'El Usuario Ha sido eliminado con Exito.',
                        'success'
                    );

                } catch (error) {
                    if (error.response?.status == 401) {
                        handlerLogout();
                    }
                }


            }
        })

    }

    const handlerUserSelectedForm = (user) => {
        // console.log(user);
        setVisibleForm(true);
        setUserSelected({ ...user });
    }

    const handlerOpenForm = () => {
        setVisibleForm(true);
    }

    const handlerCloseForm = () => {
        setVisibleForm(false);
        setUserSelected(inicitalUserForm);
        setErrors({});
    }

    return {
        users,
        userSelected,
        inicitalUserForm,
        visibleForm,
        errors,
        handleAddUser,
        handleRemoveUser,
        handlerUserSelectedForm,
        handlerOpenForm,
        handlerCloseForm,
        getUsers,
    }



}
