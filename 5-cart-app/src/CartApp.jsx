export const CartApp = () => {
    return (
        <>

            <div className="container">

                <h3>Cart App</h3>

                <div className="row">
                    <div className="col-4 my-2">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Teclado Mecanico RGB</h5>
                                <p className="card-text">Teclado mecanico con luces RGB y swithces cherry re</p>
                                <p className="card-text">$ 1000</p>
                                <button className="btn btn-primary">Agregar</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 my-2">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Samgsung Smart TV 55</h5>
                                <p className="card-text">Teclado mecanico con luces RGB y swithces cherry re</p>
                                <p className="card-text">$ 3000</p>
                                <button className="btn btn-primary">Agregar</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 my-2">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Audifono Bluetooth Sony</h5>
                                <p className="card-text">Teclado mecanico con luces RGB y swithces cherry re</p>
                                <p className="card-text">$ 750</p>
                                <button className="btn btn-primary">Agregar</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 my-2">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Memoria Corsair 8GB DDR</h5>
                                <p className="card-text">Teclado mecanico con luces RGB y swithces cherry re</p>
                                <p className="card-text">$ 500</p>
                                <button className="btn btn-primary">Agregar</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 my-2">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Asus Nvidia RTX</h5>
                                <p className="card-text">Teclado mecanico con luces RGB y swithces cherry re</p>
                                <p className="card-text">$ 5000</p>
                                <button className="btn btn-primary">Agregar</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 my-2">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">CPU Intel Core I5</h5>
                                <p className="card-text">Teclado mecanico con luces RGB y swithces cherry re</p>
                                <p className="card-text">$ 3000</p>
                                <button className="btn btn-primary">Agregar</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="my-4 w-50">
                    <h3>Carro de compras</h3>
                    <table className="table talbe-hover table-striped">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                                <th>Total</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>nombre</td>
                                <td>precio</td>
                                <td>cantidad</td>
                                <td>total</td>
                                <td>eliminar</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan="3" className="text-end fw-bold">Total</td>
                                <td colSpan="2" className="text-start fw-bold">12345</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>

            </div>


        </>
    );
}