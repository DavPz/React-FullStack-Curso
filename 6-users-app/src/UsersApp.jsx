import { useReducer, useState } from "react";
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

const inicitalUserForm = {
    id: 0,
    userName: '',
    password: '',
    email: '',
};

export const UsersApp = () => {

    const [users, dispatch] = useReducer(usersReducer, inictialUsers);

    const [userSelected, setUserSelected] = useState(inicitalUserForm);

    const handleAddUser = (user) => {

        let type;

        if (user.id ===0) {
            type =  'addUser';
        } else {
            type = 'updateUser';            
        }

        dispatch({
            type,
            payload: user,
        })
    }

    const handleRemoveUser = (id) => {
        dispatch({
            type: 'removeUser',
            payload: id,
        })
    }

    const handlerUserSelectedForm = (user) => {
        // console.log(user);
        setUserSelected({ ...user });
    }

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
