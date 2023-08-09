import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { onLogin, onLogout } from "../../store/slices/auth/authSlice";
import { loginUser } from "../services/authService";


export const useAuth = () => {

    const dispatch = useDispatch();
    const {user, isAdmin, isAuth} = useSelector(state => state.auth);

    const navigate = useNavigate();

    const handlerLogin = async ({ userName, password }) => {

        try {

            const response = await loginUser({ userName, password });

            const token = response.data.token;
            const claims = JSON.parse(window.atob(token.split(".")[1]));

            console.log(token);

            const user = { userName: response.data.userName };
            dispatch(onLogin({ user, isAdmin: claims.isAdmin }));

            sessionStorage.setItem('login', JSON.stringify({
                isAuth: true,
                isAdmin: claims.isAdmin,
                user,
            }));

            sessionStorage.setItem('token', `Bearer ${token}`);

            navigate("/users");


        } catch (error) {
            if (error.response?.status == 401) {
                Swal.fire('Error de Login', 'Username y/o Password incorrectos', 'error');
            } else if (error.response?.status == 403) {
                Swal.fire('Error de Login', 'No tiene persmisos', 'error');
            } else {
                throw error;
            }

        }

    }

    const handlerLogout = () => {
        dispatch(onLogout());

        sessionStorage.removeItem('login');
        sessionStorage.removeItem('token');
        sessionStorage.clear();

    }


    return {
        login: {
            user,
            isAdmin,
            isAuth,
        },
        handlerLogin,
        handlerLogout,
    }
}
