import React, { useEffect, useState } from 'react';

const SingleChefDetails = ({data}) => {
    const {chef_picture,chef_name,years_of_experience,num_recipes,likes,description}=data
    return (
        <>
<div className="card mx-auto mt-8  bg-slate-500 grid sm:grid-cols-1 lg:grid-cols-2 shadow-xl">
  <figure><img className='p-8' src={chef_picture} alt="Movie"/></figure>
  <div className="card-body p-8 text-slate-300">
    <h2 className="card-title font-bold text-2xl mb-2">Name: {chef_name}</h2>
    <div>
    <p className='card-title text-xl'>Experienced : {years_of_experience}</p>
    <h1 className='card-title'>Total Recipe: {num_recipes}</h1>
        <h1 className='card-title'>Total Likes: {likes}</h1>
        <h1 className='card-title mt-2'>About Chef: {description}</h1>
    </div>

  </div>
</div>
          </>
    );
};

export default SingleChefDetails;