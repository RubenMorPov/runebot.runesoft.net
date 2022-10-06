import React from 'react';
import PropTypes from 'prop-types';

const MenuItem = ({ text }) => {
    return (
        <div className="rs-menu-item">
            <p>{text}</p>
        </div>
    );
};

MenuItem.propTypes = {};

export default MenuItem;
