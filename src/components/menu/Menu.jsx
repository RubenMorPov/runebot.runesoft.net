import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Menu = ({ header, children }) => {
    const headerClassName = header ? 'rs-menu-header rs-menu-title' : 'rs-menu-header';

    return (
        <div className="rs-menu">
            <div className={headerClassName}>{header}</div>
            <div className="rs-menu-item-container">{children}</div>
        </div>
    );
};

Menu.propTypes = {
    header: PropTypes.string,
    children: PropTypes.array.isRequired,
};

export default Menu;
