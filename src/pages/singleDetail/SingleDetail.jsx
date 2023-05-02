import React from 'react';
import NavigationBar from '../../shared/navigationBar/NavigationBar';
import { Outlet, useLoaderData } from 'react-router-dom';
import SingleData from '../singleData/SingleData';

const SingleDetail = () => {
    const details=useLoaderData()
    console.log(details);
    return (
        <div>
            <NavigationBar></NavigationBar>
           <div>
            {
                details.map(detail=><SingleData key={details._id}  detail={detail}></SingleData>)
            }
           </div>
        </div>
    );
};

export default SingleDetail;