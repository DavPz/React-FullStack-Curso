import { Navigate, Route, Routes } from "react-router-dom";
import { UsersPages } from "../pages/UsersPages";
import { Navbar } from "../components/layout/Navbar";
import { RegisterPage } from "../pages/RegisterPage";
import { useUsers } from "../hooks/useUsers";
import { UserProvider } from "../context/UserProvider";

export const UserRoutes = ({ login, handlerLogout }) => {

    return (
        <>
            <UserProvider>
                <Navbar
                    login={login}
                    handlerLogout={handlerLogout}
                />
                <Routes>
                    <Route path="users" element={<UsersPages />} />
                    <Route path="users/register" element={
                        <RegisterPage />
                    } />

                    <Route path="users/edit/:id" element={
                        <RegisterPage />
                    } />

                    <Route path="/" element={<Navigate to="/users" />} />
                </Routes>
            </UserProvider>
        </>
    )
}
