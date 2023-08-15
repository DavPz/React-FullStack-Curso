import { useEffect } from "react";
import { useAuth } from "../auth/hooks/useAuth";
import { UserList } from "../components/UserList";
import { UserModalForm } from "../components/UserModalForm";
import { useUsers } from "../hooks/useUsers";

export const UsersPages = () => {

    const {
        users,
        visibleForm,
        isLoading,
        handlerOpenForm,
        getUsers,
    } = useUsers();

    const { login } = useAuth();

    useEffect(() => {
        getUsers();
    }, [])

    if (isLoading) {
        return (
            <div className="container my-4">
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        )

    };

    return (
        <>
            {!visibleForm ||
                <UserModalForm />
            }
            <div className="container my-4">
                <h2>Users App</h2>
                <div className="row">
                    <div className="col">
                        {(visibleForm || !login.isAdmin) ||
                            <button
                                className="btn btn-primary my-2"
                                onClick={handlerOpenForm}>
                                Nuevo Usuario
                            </button>
                        }
                        {
                            users.length === 0
                                ? <div className="alert alert-warning">No Hay usuarios en el Sitema</div>
                                : <UserList />
                        }

                    </div>
                </div>
            </div>

        </>
    )
}
