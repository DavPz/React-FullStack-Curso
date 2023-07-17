import { UserRow } from "./UserRow"

export const UserList = ({ users = [], handleRemoveUser, handlerUserSelectedForm }) => {
    return (

        <table className="table table-hover table-stripped">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Update</th>
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
                            handleRemoveUser={handleRemoveUser}
                            handlerUserSelectedForm={handlerUserSelectedForm}
                        />
                    ))
                }
            </tbody>
        </table>
    )


}
