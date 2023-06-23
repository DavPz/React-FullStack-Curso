
import PropTypes from 'prop-types';
import { Title } from './components/Title';
import { UserDetails } from './components/UserDetail';
import { Book } from './components/Book';

export const HelloWorldApp = ({ user, id, title }) => {

    return (
        <>
            <Title title={title} />
            <UserDetails user={user} id={id} />
            <Book book={'Libro 1: basado en una historia real'} />
        </>
    );

}

HelloWorldApp.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
}

HelloWorldApp.defaultProps = {
    title: 'Hola Mundo por defecto !',
}