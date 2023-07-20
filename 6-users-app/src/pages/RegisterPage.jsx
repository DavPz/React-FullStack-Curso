import { useEffect, useState } from "react"
import { UserForm } from "../components/UserForm"
import { useParams } from "react-router-dom";

export const RegisterPage = ({ users = [], handleAddUser, inicitalUserForm }) => {

    const [userSelected, setUserSelected] = useState(inicitalUserForm);

    const { id } = useParams();

    useEffect(() => {
        if (id) {
            const user = users.find(u => u.id == id) || inicitalUserForm;
            setUserSelected(user);
        }

    }, [id])

    return (
        <div className="container my-4">
            <h4>{userSelected.id > 0 ? 'Editar' : 'Registro'} Usuario</h4>
            <div className="row">
                <div className="col">
                    <UserForm
                        handleAddUser={handleAddUser}
                        inicitalUserForm={inicitalUserForm}
                        userSelected={userSelected}
                    />
                </div>
            </div>
        </div>
    )
}
