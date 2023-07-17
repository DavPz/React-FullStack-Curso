import { UserForm } from "./components/UserForm"
import { UserList } from "./components/UserList"
import { useUsers } from "./hooks/useUsers";



export const UsersApp = () => {

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
        <div className="container my-4">
            <h2>Users App</h2>
            <div className="row">
                {!visibleForm ||
                    <div className="col">
                        <UserForm
                            handleAddUser={handleAddUser}
                            inicitalUserForm={inicitalUserForm}
                            userSelected={userSelected}
                            handlerCloseForm={handlerCloseForm} />
                    </div>
                }

                <div className="col">
                    {visibleForm ||
                        <button
                            className="btn btn-primary my-2"
                            onClick={handlerOpenForm}>
                            Nuevo Usuario
                        </button>
                    }
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
