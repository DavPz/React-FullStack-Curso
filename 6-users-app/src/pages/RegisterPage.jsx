import { useState } from "react"
import { UserForm } from "../components/UserForm"

export const RegisterPage = ({ handleAddUser, inicitalUserForm }) => {
    
    const [userSelected, setUserSelected] = useState(inicitalUserForm);

    return (
        <div className="container my-4">
            <h4>Registro de Usuarios</h4>
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
