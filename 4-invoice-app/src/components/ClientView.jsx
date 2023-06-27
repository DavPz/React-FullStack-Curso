export const ClientView = ({ title, client }) => {
    const { name: nameClient, lastName, address } = client;
    const { country, city, state, street, number } = address;
    return (
        <>
            <h3>{title}</h3>
            <ul className="list-group">
                <li className="list-group-item active">{nameClient} {lastName}</li>
                <li className="list-group-item">{street} {number}</li>
                <li className="list-group-item">{city}, {state}, {country}</li>
            </ul>
        </>
    )
}