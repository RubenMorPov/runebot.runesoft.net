import React from 'react';
import PropTypes from 'prop-types';

const DefaultPanel = ({ title, children }) => {
    const headerClassName = title ? 'rs-panel-header rs-panel-title' : 'rs-panel-header';
    return (
        <div className="rs-default-panel">
            <div className={headerClassName}>{title}</div>
            <div className="rs-panel-content">{children}</div>
        </div>
    );
};

DefaultPanel.propTypes = {
    title: PropTypes.string,
    children: PropTypes.array.isRequired,
};

export default DefaultPanel;
