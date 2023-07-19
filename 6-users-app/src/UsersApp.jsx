import { useReducer } from "react";
import { LoginPage } from "./auth/pages/LoginPage";
import { UsersPages } from "./pages/UsersPages";
import { loginReducer } from "./auth/reducers/loginReducer";
import Swal from "sweetalert2";
import { Navbar } from "./components/layout/Navbar";
import { useAuth } from "./auth/hooks/useAuth";


export const UsersApp = () => {

    const { login, handlerLogin, handlerLogout } = useAuth();

    return (
        <>
            {login.isAuth
                ?
                (
                    <>
                        <Navbar
                            login={login}
                            handlerLogout={handlerLogout}
                        />
                        <UsersPages />
                    </>
                )
                : <LoginPage handlerLogin={handlerLogin} />
            }

        </>
    )
}
