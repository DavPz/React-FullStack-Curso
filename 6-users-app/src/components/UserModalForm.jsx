import { UserForm } from "./UserForm"

export const UserModalForm = ({userSelected, inicitalUserForm, handleAddUser, handlerCloseForm }) => {
    return (
        <>

            <div className="abrir-modal fadeIn animacion">
                <div className="modal" style={{ display: "block" }} tabIndex="-1">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">
                                    {userSelected.id > 0 ? 'Editar' : 'Crear'} Modal Usuario
                                </h5>
                            </div>
                            <div className="modal-body">
                                <UserForm
                                    handleAddUser={handleAddUser}
                                    inicitalUserForm={inicitalUserForm}
                                    userSelected={userSelected}
                                    handlerCloseForm={handlerCloseForm} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
