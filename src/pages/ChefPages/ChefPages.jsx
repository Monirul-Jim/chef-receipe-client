import React, { useEffect, useState } from 'react';
import ChefPage from '../chefPage/ChefPage';

const ChefPages = () => {
    const [datas,setData]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/data')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
    return (
        <div className='mt-8'>
            <h1 className='text-6xl text-center'>Our Chef</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6'>
           {
            datas.map(data=><ChefPage key={data.id} data={data}></ChefPage>)
           }
            </div>
        </div>
    );
};

export default ChefPages;