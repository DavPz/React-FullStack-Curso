import { Navigate, Route, Routes } from "react-router-dom";
import { UsersPages } from "../pages/UsersPages";
import { Navbar } from "../components/layout/Navbar";
import { RegisterPage } from "../pages/RegisterPage";
import { useUsers } from "../hooks/useUsers";

export const UserRoutes = ({ login, handlerLogout }) => {

    const {
        users,
        userSelected,
        inicitalUserForm,
        visibleForm,
        handleAddUser,
        handleRemoveUser,
        handlerUserSelectedForm,
        handlerOpenForm,
        handlerCloseForm,
    } = useUsers();

    return (
        <>
            <Navbar
                login={login}
                handlerLogout={handlerLogout}
            />
            <Routes>
                <Route path="users" element={<UsersPages
                    users={users}
                    userSelected={userSelected}
                    inicitalUserForm={inicitalUserForm}
                    visibleForm={visibleForm}
                    handleAddUser={handleAddUser}
                    handleRemoveUser={handleRemoveUser}
                    handlerUserSelectedForm={handlerUserSelectedForm}
                    handlerOpenForm={handlerOpenForm}
                    handlerCloseForm={handlerCloseForm}
                />} />
                <Route path="users/register" element={
                    <RegisterPage
                        handleAddUser={handleAddUser}
                        inicitalUserForm={inicitalUserForm}
                    />
                } />
                <Route path="/" element={<Navigate to="/users" />} />
            </Routes>
        </>
    )
}
