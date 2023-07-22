import { useContext } from "react"
import { UserRow } from "./UserRow"
import { UserContext } from "../context/UserContext"

export const UserList = () => {

    const { users } = useContext(UserContext);

    return (

        <table className="table table-hover table-stripped">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Update</th>
                    <th>Update Route</th>
                    <th>Remove</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(({ id, userName, email }) => (
                        <UserRow
                            key={id}
                            id={id}
                            userName={userName}
                            email={email}
                        />
                    ))
                }
            </tbody>
        </table>
    )


}
