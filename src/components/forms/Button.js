import React from 'react';
import PropTypes from 'prop-types';

function Button({ text, handler }) {
    return (
        <button className="rs-button" onClick={handler}>
            {text}
        </button>
    );
}

Button.propTypes = {
    text: PropTypes.string,
    handler: PropTypes.func.isRequired,
};

export default Button;
