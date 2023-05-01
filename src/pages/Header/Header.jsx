import React from 'react';
import foodPic from '../../assets/food picture.jpg'

const Header = () => {
    return (
        <>
            <div className="relative h-screen overflow-hidden">
                <img className="absolute top-0 left-0 w-full h-full object-cover" src={foodPic} alt="" />
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-3xl sm:text-5xl text-white font-bold leading-tight mb-6">Welcome<br /> To the Hunger Monster<br /> Restaurants</h1>
                        <h2 className="text-xl sm:text-3xl text-white font-medium leading-tight">Experience The Best Food In The Country</h2>
                    </div>
                </div>
            </div>
            
            </>

    );
};

export default Header;