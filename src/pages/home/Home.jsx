import React, { Suspense, lazy } from 'react';
import NavigationBar from '../../shared/navigationBar/NavigationBar';
import HomePage from '../../layout/homePage/HomePage';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
                <HomePage />
                <Outlet />
        </div>
    );
};

export default Home;