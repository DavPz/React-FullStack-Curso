import { useUsers } from "../hooks/useUsers";
import { UserContext } from "./UserContext"

export const UserProvider = ({ children }) => {

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
        <UserContext.Provider value={
            {
                users,
                userSelected,
                inicitalUserForm,
                visibleForm,
                handleAddUser,
                handleRemoveUser,
                handlerUserSelectedForm,
                handlerOpenForm,
                handlerCloseForm,
            }
        }>
            {children}
        </UserContext.Provider>
    )

}
