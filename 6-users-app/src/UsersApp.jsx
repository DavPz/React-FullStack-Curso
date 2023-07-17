import { UserForm } from "./components/UserForm"
import { UserList } from "./components/UserList"
import { useUsers } from "./hooks/useUsers";



export const UsersApp = () => {

    const {
        users,
        userSelected,
        inicitalUserForm,
        handleAddUser,
        handleRemoveUser,
        handlerUserSelectedForm
    } = useUsers();


    return (
        <div className="container my-4">
            <h2>Users App</h2>
            <div className="row">
                <div className="col">
                    <UserForm
                        handleAddUser={handleAddUser}
                        inicitalUserForm={inicitalUserForm}
                        userSelected={userSelected} />
                </div>
                <div className="col">
                    {users.length === 0
                        ? <div className="alert alert-warning">No Hay usuarios en el Sitema</div>
                        : <UserList
                            users={users}
                            handleRemoveUser={handleRemoveUser}
                            handlerUserSelectedForm={handlerUserSelectedForm} />
                    }

                </div>
            </div>
        </div>
    )
}
