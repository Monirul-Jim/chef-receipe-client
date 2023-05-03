import React from 'react';
import NavigationBar from '../../shared/navigationBar/NavigationBar';
import SingleData from '../singleData/SingleData';
import { Outlet } from 'react-router-dom';
import SingleChef from './SingleChef';
import Footer from '../../shared/Footer/Footer';

const SingleDetail = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default SingleDetail;