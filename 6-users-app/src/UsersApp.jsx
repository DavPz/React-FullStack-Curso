import { useReducer } from "react";
import { LoginPage } from "./auth/pages/LoginPage";
import { UsersPages } from "./pages/UsersPages";
import { loginReducer } from "./auth/reducers/loginReducer";
import Swal from "sweetalert2";
import { Navbar } from "./components/layout/Navbar";
import { useAuth } from "./auth/hooks/useAuth";
import { Navigate, Route, Routes } from "react-router-dom";
import { UserRoutes } from "./routes/UserRoutes";


export const UsersApp = () => {

    const { login, handlerLogin, handlerLogout } = useAuth();

    return (
        <Routes>
            {login.isAuth
                ?
                (
                    <Route path="/*" element={<UserRoutes login={login} handlerLogout={handlerLogout} />} />
                )
                : <>
                    <Route path="/login" element={<LoginPage handlerLogin={handlerLogin} />} />
                    <Route path="/*" element={<Navigate to={"/login"} />} />
                </>
            }

        </Routes>
    )
}
