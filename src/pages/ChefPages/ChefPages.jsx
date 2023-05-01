import React, { useEffect, useState } from 'react';
import ChefPage from '../chefPage/ChefPage';

const ChefPages = () => {
    const [datas,setData]=useState()
    useEffect(()=>{
        fetch('http://localhost:5000/data')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
    console.log(datas);
    return (
        <div className='mt-8'>
            <h1 className='text-6xl text-center'>Our Chef</h1>
            <>
           {
            datas.map(data=><ChefPage key={data.id} data={data}></ChefPage>)
           }
            </>
        </div>
    );
};

export default ChefPages;