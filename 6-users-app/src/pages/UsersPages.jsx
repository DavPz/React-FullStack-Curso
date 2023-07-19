import { UserList } from "../components/UserList"
import { UserModalForm } from "../components/UserModalForm";

export const UsersPages = ({
    users,
    userSelected,
    inicitalUserForm,
    visibleForm,
    handleAddUser,
    handleRemoveUser,
    handlerUserSelectedForm,
    handlerOpenForm,
    handlerCloseForm,
}) => {




    return (
        <>
            {!visibleForm ||
                <UserModalForm
                    userSelected={userSelected}
                    inicitalUserForm={inicitalUserForm}
                    handleAddUser={handleAddUser}
                    handlerCloseForm={handlerCloseForm}
                />

            }
            <div className="container my-4">
                <h2>Users App</h2>
                <div className="row">
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

        </>
    )
}
