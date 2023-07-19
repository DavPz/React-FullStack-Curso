import { useReducer } from "react";
import { loginReducer } from "../reducers/loginReducer";
import Swal from "sweetalert2";
import { loginUser } from "../services/authService";
import { Navigate } from "react-router-dom";

const initialLogin = JSON.parse(sessionStorage.getItem('login')) || {
    isAuth: false,
    user: undefined,
}

export const useAuth = () => {

    const [login, dispatch] = useReducer(loginReducer, initialLogin);

    const handlerLogin = ({ userName, password }) => {
        const isLogin = loginUser({ userName, password });
        if (isLogin) {
            const user = { userName: 'admin' };
            dispatch({
                type: 'login',
                payload: user,
            });
            sessionStorage.setItem('login', JSON.stringify({
                isAuth: true,
                user,
            }));
            

        } else {
            Swal.fire('Error de Login', 'Username y/o Password incorrectos', 'error');
        }

    }

    const handlerLogout = () => {
        dispatch({
            type: 'logout',
        });

        sessionStorage.removeItem('login');

    }


    return {
        login,
        handlerLogin,
        handlerLogout,
    }
}
