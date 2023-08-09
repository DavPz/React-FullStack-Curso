import { useContext } from "react";
import { AuthContext } from "../auth/context/AuthContext";
import { useUsers } from "../hooks/useUsers";
import { UserRow } from "./UserRow";

export const UserList = () => {

    const { users } = useUsers();

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
