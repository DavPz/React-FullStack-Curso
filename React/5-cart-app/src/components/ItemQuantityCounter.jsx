export const ItemQuantityCounter = ({ item, handlerUpdateQuantityManually }) => {

    const counterIncrement = () => {
        handlerUpdateQuantityManually(item.product.id, +1);
    };

    const counterDicrement = () => {
        handlerUpdateQuantityManually(item.product.id, -1);

    };

    return (
        <>
            <td>
                {item.quantity <= 1 ? <button className="btn btn-link" disabled></button> : <button className="btn btn-outline-secundary btn-sm" onClick={() => {
                    counterDicrement()
                }} > - </button>}
                <span className="user-select-none mx-2">{item.quantity}</span>
                <button className="btn btn-outline-secundary btn-sm" onClick={() => {
                    counterIncrement()
                }} > + </button>
            </td>
        </>
    );
}
