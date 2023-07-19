import { Navigate, Route, Routes } from "react-router-dom";
import { UsersPages } from "../pages/UsersPages";
import { Navbar } from "../components/layout/Navbar";
import { RegisterPage } from "../pages/RegisterPage";

export const UserRoutes = ({ login, handlerLogout }) => {


    return (
        <>
            <Navbar
                login={login}
                handlerLogout={handlerLogout}
            />
            <Routes>
                <Route path="users" element={<UsersPages />} />
                <Route path="users/register" element={
                    <RegisterPage
                    //handleAddUser={handleAddUser}
                    //inicitalUserForm={inicitalUserForm} 
                    />
                } />
                <Route path="/" element={<Navigate to="/users" />} />
            </Routes>
        </>
    )
}
