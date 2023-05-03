import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleData from '../singleData/SingleData';

const SingleChef = () => {
    const details=useLoaderData()
    console.log();
    return (
        <div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-6'>
            {
                details.map(detail=><SingleData key={detail._id}  detail={detail}></SingleData>)
            }
           </div>
        </div>
    );
};

export default SingleChef;