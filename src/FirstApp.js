import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const FirstApp = ({greeting, subtitle}) => {

    return (
        <Fragment>
            <h1> { greeting } </h1>
            <p> { subtitle } </p>
        </Fragment>
    );

}
FirstApp.propTypes = {
    greeting: PropTypes.string.isRequired
}
  
FirstApp.defaultProps = {
    subtitle: 'Este es un subtitulo'
}
  
export default FirstApp;