import React from 'react';
import PropTypes from 'prop-types';

// se puede usar ({ saludo }) y ya no tendria que usar props, solo {saludo2}
const PrimeraApp = (props) => {
    const saludo = 'Hola mundo con react';
    return (
        <>
            <h1>{ saludo }</h1>
            <p>Mi primera aplicación </p>
            <p>{props.saludo2}</p>
            <p>{props.subtitulo}</p>
        </>
    );

};

PrimeraApp.propTypes  = {
    // El isRequired solo si lo necesitas obligatoriamente
    saludo2: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo'
}


export default PrimeraApp;