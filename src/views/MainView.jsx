import React from 'react';
import PropTypes from 'prop-types';
import LeftView from './main/LeftView';
import TopView from './main/TopView';
import FooterView from './main/FooterView';
import ContentView from './main/ContentView';

const MainView = (props) => {
    return (
        <div className="rs-main-view">
            <LeftView></LeftView>
            <div className="rs-main-view-center">
                <TopView></TopView>
                <ContentView></ContentView>
                <FooterView></FooterView>
            </div>
        </div>
    );
};

MainView.propTypes = {};

export default MainView;
