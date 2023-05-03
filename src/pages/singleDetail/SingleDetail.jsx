import React from 'react';
import NavigationBar from '../../shared/navigationBar/NavigationBar';
import SingleData from '../singleData/SingleData';
import { Outlet } from 'react-router-dom';
import SingleChef from './SingleChef';

const SingleDetail = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
        </div>
    );
};

export default SingleDetail;