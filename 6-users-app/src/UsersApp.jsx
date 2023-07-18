import { useReducer } from "react";
import { LoginPage } from "./auth/pages/LoginPage";
import { UsersPages } from "./pages/UsersPages";
import { loginReducer } from "./auth/reducers/loginReducer";
import Swal from "sweetalert2";

const initialLogin = {
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
            })
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
