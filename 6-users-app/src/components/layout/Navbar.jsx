export const Navbar = ({ login, handlerLogout }) => {
    return (
        <nav className="navbar bg-dark navbar-expand-lg" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Users App</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <span className="nav-item nav-link text-primary mx-3">
                        <b>{login.user?.userName}</b>
                    </span>
                    <button
                        className="btn btn-outline-success"
                        onClick={handlerLogout}>
                            LogOut
                    </button>
                </div>
            </div>
        </nav>
    )
}
