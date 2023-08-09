import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../auth/context/AuthContext";
import { useUsers } from "../hooks/useUsers";

export const UserRow = ({ id, userName, email, adminRole }) => {

    const { handleRemoveUser, handlerUserSelectedForm } = useUsers();

    const { login } = useContext(AuthContext);

    return (
        <tr>
            <td>{id}</td>
            <td>{userName}</td>
            <td>{email}</td>
            {!login.isAdmin ||
                <>
                    <td>
                        <button
                            type="button"
                            className="btn btn-secondary btn-sm"
                            onClick={() => handlerUserSelectedForm({
                                id,
                                userName,
                                email,
                                adminRole
                            })}>
                            Update
                        </button>
                    </td>


                    <td>
                        <NavLink className="btn btn-secondary btn-sm" to={'/users/edit/' + id} >Update route</NavLink>
                    </td>

                    <td> <button
                        type="button"
                        className="btn btn-danger btn-sm"
                        onClick={() => handleRemoveUser(id)}
                    >
                        Remove
                    </button>
                    </td>
                </>
            }
        </tr >
    )
}
