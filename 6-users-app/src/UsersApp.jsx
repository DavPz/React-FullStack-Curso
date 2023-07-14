import { UserForm } from "./components/UserForm"
import { UserList } from "./components/UserList"

const inictialUsers = [
    {
        id: 1,
        userName: 'pepe',
        password: '12345',
        email: 'pepe@correo.com'
    },
];

export const UsersApp = () => {

    const handleAddUser = (user) => {
        console.log(user);
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
                        users={inictialUsers} />
                </div>
            </div>
        </div>
    )
}
