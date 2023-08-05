import { useReducer } from "react";
import { loginReducer } from "../reducers/loginReducer";
import Swal from "sweetalert2";
import { loginUser } from "../services/authService";
import { Navigate, useNavigate } from "react-router-dom";

const initialLogin = JSON.parse(sessionStorage.getItem('login')) || {
    isAuth: false,
    user: undefined,
}

export const useAuth = () => {

    const [login, dispatch] = useReducer(loginReducer, initialLogin);
    const navigate = useNavigate();


    const handlerLogin = async ({ userName, password }) => {
        
        try {

            const response = await loginUser({ userName, password });

            const token = response.data.token;

            const user = { userName: response.data.userName };
            dispatch({
                type: 'login',
                payload: user,
            });
            sessionStorage.setItem('login', JSON.stringify({
                isAuth: true,
                user,
            }));

            navigate("/users");


        } catch(error) {
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
