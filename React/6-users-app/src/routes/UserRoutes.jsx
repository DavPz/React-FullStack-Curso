import { Navigate, Route, Routes } from "react-router-dom";
import { UsersPages } from "../pages/UsersPages";
import { Navbar } from "../components/layout/Navbar";
import { RegisterPage } from "../pages/RegisterPage";
import { UserProvider } from "../context/UserProvider";
import { AuthContext } from "../auth/context/AuthContext";
import { useContext } from "react";

export const UserRoutes = () => {


    const { login } = useContext(AuthContext);

    return (
        <>
            <UserProvider>
                <Navbar />
                <Routes>
                    <Route path="users" element={<UsersPages />} />
                    {!login.isAdmin ||
                        <>
                            <Route path="users/register" element={
                                <RegisterPage />
                            } />

                            <Route path="users/edit/:id" element={
                                <RegisterPage />
                            } />

                        </>
                    }
                    <Route path="/" element={<Navigate to="/users" />} />
                </Routes>
            </UserProvider>
        </>
    )
}
