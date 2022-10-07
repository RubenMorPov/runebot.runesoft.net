import React from 'react';
import PropTypes from 'prop-types';
import DefaultPanel from '../../components/panels/DefaultPanel';

const ContentView = (props) => {
    return <div className="rs-content-view">
        <DefaultPanel title="Panel 1"></DefaultPanel>
        <DefaultPanel title="Panel 2"></DefaultPanel>
        <DefaultPanel title="Panel 3"></DefaultPanel>
        <DefaultPanel title="Panel 4"></DefaultPanel>
        <DefaultPanel title="Panel 5"></DefaultPanel>
        <DefaultPanel title="Panel 6"></DefaultPanel>
    </div>;
};

ContentView.propTypes = {};

export default ContentView;
