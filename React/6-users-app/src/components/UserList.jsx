import { useContext } from "react"
import { UserRow } from "./UserRow"
import { UserContext } from "../context/UserContext"
import { AuthContext } from "../auth/context/AuthContext";

export const UserList = () => {

    const { users } = useContext(UserContext);

    const { login } = useContext(AuthContext);

    return (

        <table className="table table-hover table-stripped">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Username</th>
                    <th>Email</th>
                    {!login.isAdmin ||
                        <>
                            <th>Update</th>
                            <th>Update Route</th>
                            <th>Remove</th>
                        </>
                    }
                </tr>
            </thead>
            <tbody>
                {
                    users.map(({ id, userName, email, adminRole }) => (
                        <UserRow
                            key={id}
                            id={id}
                            userName={userName}
                            email={email}
                            adminRole={adminRole}
                        />
                    ))
                }
            </tbody>
        </table>
    )


}
