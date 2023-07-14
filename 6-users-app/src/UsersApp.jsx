import { useReducer } from "react";
import { UserForm } from "./components/UserForm"
import { UserList } from "./components/UserList"
import { usersReducer } from "./reducers/usersReducer";

const inictialUsers = [
    {
        id: 1,
        userName: 'pepe',
        password: '12345',
        email: 'pepe@correo.com'
    },
];

export const UsersApp = () => {

    const [users, dispatch] = useReducer(usersReducer, inictialUsers);

    const handleAddUser = (user) => {
        dispatch({
            type: 'addUser',
            payload: user,
        })
    }

    return (
        <div className="container my-4">
            <h2>Users App</h2>
            <div className="row">
                <div className="col">
                    <UserForm
                        handleAddUser={handleAddUser} />
                </div>
                <div className="col">
                    <UserList
                        users={users} />
                </div>
            </div>
        </div>
    )
}
