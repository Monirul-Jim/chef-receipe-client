import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleData from '../singleData/SingleData';
import SingleChefDetails from '../singlechef/SingleChefDetails';

const SingleChef = () => {
    const details=useLoaderData()
    console.log();
    return (
        <div>
              <>
                  {/* <SingleChefDetails  data={details}></SingleChefDetails> */}
                </>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
          {
                details.map(detail=><SingleData key={detail._id}  detail={detail}></SingleData>)
            }
           </div>
        </div>
    );
};

export default SingleChef;