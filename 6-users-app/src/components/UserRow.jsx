
export const UserRow = ({ id, userName, password, email, handleRemoveUser, handlerUserSelectedForm }) => {

    return (
        <tr>
            <td>{id}</td>
            <td>{userName}</td>
            <td>{email}</td>
            <td>
                <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    onClick={() => handlerUserSelectedForm({
                        id,
                        userName,
                        password,
                        email
                    })}>
                    Update
                </button>
            </td>
            <td> <button
                type="button"
                className="btn btn-danger btn-sm"
                onClick={() => handleRemoveUser(id)}
            >
                Remove
            </button>
            </td>
        </tr>
    )
}
