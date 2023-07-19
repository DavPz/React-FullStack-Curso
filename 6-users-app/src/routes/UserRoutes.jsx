import { Navigate, Route, Routes } from "react-router-dom";
import { UsersPages } from "../pages/UsersPages";
import { Navbar } from "../components/layout/Navbar";

export const UserRoutes = ({ login, handlerLogout }) => {
    return (
        <>
            <Navbar
                login={login}
                handlerLogout={handlerLogout}
            />
            <Routes>
                <Route path="users" element={<UsersPages />} />
                <Route path="/" element={<Navigate to="/users" />} />
            </Routes>
        </>
    )
}
