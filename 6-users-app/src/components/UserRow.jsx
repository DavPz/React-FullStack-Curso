
export const UserRow = ({ id, userName, email }) => {
    return (
        <tr>
            <td>{id}</td>
            <td>{userName}</td>
            <td>{email}</td>
            <td>
                <button
                    type="button"
                    className="btn btn-secondary btn-sm">
                    Update
                </button>
            </td>
            <td> <button
                type="button"
                className="btn btn-danger btn-sm">
                Remove
            </button>
            </td>
        </tr>
    )
}
