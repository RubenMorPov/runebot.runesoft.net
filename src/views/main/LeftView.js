import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../../components/menu/Menu';
import MenuItem from '../../components/menu/MenuItem';

const LeftView = (props) => {
    return (
        <div className="rs-left-view">
            <Menu header="Menu">
                <MenuItem text="Opt. 1" />
                <MenuItem text="Opt. 2" />
                <MenuItem text="Opt. 3" />
                <MenuItem text="Opt. 4" />
                <MenuItem text="Opt. 5" />
                <MenuItem text="Opt. 6" />
                <MenuItem text="Opt. 7" />
            </Menu>
        </div>
    );
};

LeftView.propTypes = {};

export default LeftView;
