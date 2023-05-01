import React from 'react';
import NavigationBar from '../../shared/navigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';
import HomePage from '../../layout/homePage/HomePage';

const Home = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <HomePage></HomePage>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;