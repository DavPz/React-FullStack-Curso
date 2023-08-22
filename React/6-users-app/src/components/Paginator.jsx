import { Link } from "react-router-dom"

export const Paginator = ({ url, paginator }) => {

    return (
        <>
            {paginator?.totalPages == 1 ||

                <ul className="pagination">

                    <li className={paginator.first ? 'page-item disabled' : 'page-item'}>
                        <Link className="page-link" to={`${url}/0`} >Primera</Link>
                    </li>

                    <li className={paginator.number == 0 ? 'page-items disabled' : 'page-items'}>
                        <Link className="page-link" to={`${url}/${paginator.number - 1}`}>Atras</Link>
                    </li>

                    <li className={paginator.number >= paginator.totalPages - 1 ? 'page-items disabled' : 'page-items'}>
                        <Link className="page-link" to={`${url}/${paginator.number + 1}`}>Siguiente</Link>
                    </li>

                    <li className={paginator.last ? 'page-item disabled' : 'page-item'}>
                        <Link className="page-link" to={`${url}/${paginator.totalPages - 1}`} >Ultima</Link>
                    </li>




                </ul>

            }

        </>
    )
}
