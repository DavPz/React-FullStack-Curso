import { useContext } from "react";
import { UserList } from "../components/UserList"
import { UserModalForm } from "../components/UserModalForm";
import { UserContext } from "../context/UserContext";

export const UsersPages = () => {

    const {
        users,
        visibleForm,
        handlerOpenForm,
    } = useContext(UserContext);

    return (
        <>
            {!visibleForm ||
                <UserModalForm />
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
                            : <UserList />
                        }

                    </div>
                </div>
            </div>

        </>
    )
}
