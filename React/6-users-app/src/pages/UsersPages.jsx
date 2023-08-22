import { useEffect } from "react";
import { useAuth } from "../auth/hooks/useAuth";
import { UserList } from "../components/UserList";
import { UserModalForm } from "../components/UserModalForm";
import { useUsers } from "../hooks/useUsers";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { useParams } from "react-router-dom";
import { Paginator } from "../components/Paginator";

export const UsersPages = () => {

    const { page } = useParams();

    const {
        users,
        visibleForm,
        isLoading,
        paginator,
        handlerOpenForm,
        getUsers,
    } = useUsers();

    const { login } = useAuth();

    useEffect(() => {
        debugger;
        getUsers(page);
    }, [, page])

    if (isLoading) {
        return (
            <LoadingSpinner />
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
                                :
                                <>
                                    <UserList />
                                    <Paginator url={"/users/page"} 
                                    paginator={paginator}/>
                                </>
                        }

                    </div>
                </div>
            </div>

        </>
    )
}
