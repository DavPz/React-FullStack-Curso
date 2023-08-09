import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../auth/context/AuthContext";
import { deleteUser, finAll, save, updateUser } from "../services/userService";
import { addUser, inicitalUserForm, loadingUsers, onCloseForm, onOpenForm, onUserSelectedForm, removeUser, updateUserRedux, loadingError } from "../store/slices/users/usersSlice";

export const useUsers = () => {

    const { users, userSelected, visibleForm, errors } = useSelector(state => state.users);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const { handlerLogout } = useContext(AuthContext);

    const getUsers = async () => {

        try {

            const result = await finAll();
            dispatch(loadingUsers(result.data));
        } catch (error) {

            if (error.response?.status == 401) {
                handlerLogout();
            }
        }

    };

    const handleAddUser = async (user) => {

        let response;

        try {

            if (user.id === 0) {
                response = await save(user);
                dispatch(addUser(response.data))
            } else {
                response = await updateUser(user);
                dispatch(updateUserRedux(response.data));
            }

            Swal.fire(
                (user.id === 0) ? 'Usuario Creado' : 'Usuario Actualizado',
                (user.id === 0) ? 'El Usuario ha sido creado con exito!!' : 'El usuario ha sido Actualizado Correctamente',
                'success'
            );

            handlerCloseForm();
            navigate("/users");

        } catch (error) {
            if (error.response && error.response.status == 400) {
                dispatch(loadingError(error.response.data));

            } else if (error.response && error.response.status == 500 &&
                error.response.data?.message?.includes('constraint')) {

                if (error.response.data?.message?.includes('UK_username')) {
                    dispatch(loadingError({
                        userName: 'El Usename Ya existe!'
                    }));
                } else if (error.response.data?.message?.includes('UK_email')) {
                    dispatch(loadingError({
                        email: 'El email Ya existe!'
                    }));
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
        }).then(async (result) => {
            if (result.isConfirmed) {

                try {

                    await deleteUser(id);

                    dispatch(removeUser(id));

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
        dispatch(onUserSelectedForm({ ...user }))
    }

    const handlerOpenForm = () => {
        dispatch(onOpenForm());
    }

    const handlerCloseForm = () => {
        dispatch(onCloseForm());
        dispatch(loadingError({}));
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
