import PropTypes from 'prop-types';

export const ClientView = ({ title, client }) => {
    const {
        name: nameClient,
        lastName,
        address: {
            country,
            city,
            state,
            street,
            number }
    } = client;
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

ClientView.propTypes = {
    title: PropTypes.string.isRequired,
    client: PropTypes.object.isRequired,
}