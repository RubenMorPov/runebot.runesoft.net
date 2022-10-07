import React from 'react';
import PropTypes from 'prop-types';

const InputText = ({ label, hideChars }) => {
    if (!label.endsWith(':')) label += ':';
    return (
        <div className="rs-input rs-input-text">
            <label className="rs-input-text-label">{label}</label>
            <input className="rs-input-text-field" type={hideChars ? 'password' : 'text'} />
        </div>
    );
};

InputText.propTypes = {
    label: PropTypes.string,
    hideChars: PropTypes.bool.isRequired,
};

InputText.defaultProps = {
    hideChars: false,
};

export default InputText;
