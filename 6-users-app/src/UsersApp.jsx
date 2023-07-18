import { useReducer } from "react";
import { LoginPage } from "./auth/pages/LoginPage";
import { UsersPages } from "./pages/UsersPages";
import { loginReducer } from "./auth/reducers/loginReducer";
import Swal from "sweetalert2";

const initialLogin = JSON.parse(sessionStorage.getItem('login')) || {
        isAuth: false,
    user: undefined,
}
export const UsersApp = () => {

    const [login, dispatch] = useReducer(loginReducer, initialLogin);

    const handlerLogin = ({ userName, password }) => {

        if (userName === 'admin' && password === '12345') {
            const user = { userName: 'admin' };
            dispatch({
                type: 'login',
                payload: user,
            });
            sessionStorage.setItem('login',JSON.stringify({
                isAuth: true,
                user,
            }));

        } else {
            Swal.fire('Error de Login', 'Username y/o Password incorrectos', 'error');
        }

    }

    return (
        <>
            {login.isAuth
                ? <UsersPages />
                : <LoginPage handlerLogin={handlerLogin} />
            }

        </>
    )
}
