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
            <>
            <h1 className='mt-8 text-2xl font-semibold text-center'>Elevating Your Dining Experience Through Our Hospitality </h1>
                <div className="flex justify-center items-center mt-12">
                    <div className="grid sm:grid-cols-1 lg:grid-cols-2 lg:space-x-32">
                        <div>
                            <img className="w-full h-96 lg:ms-4 rounded-lg shadow-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZwXNfJLgwdYszcOg7kcL4ngk1DwDHNDhOe-HmJC7FyAY9l1il3ZrYSmAA-1dUpv96m4Q&usqp=CAU" alt="" />
                        </div>
                        <div>
                            <p className="sm:p-4 text-lg text-gray-700 mt-4">We are a team of passionate foodies who are dedicated to providing our customers with exceptional service and delicious cuisine. Our menu features a wide variety of mouth-watering dishes, each prepared with the freshest ingredients and carefully crafted to satisfy even the most discerning palates. From classic comfort food to contemporary culinary creations, we offer something for everyone.</p>
                            <p className="sm:p-4 text-lg text-gray-700 mt-4">In addition to our amazing food, we are committed to providing top-notch service. Our friendly and knowledgeable staff will make sure that you have a memorable dining experience, whether you're joining us for a quick lunch or a leisurely dinner.</p>
                            <p className="sm:p-4 text-lg text-gray-700 mt-4">So come dine with us and discover why our restaurant is the go-to destination for food lovers in the area. We can't wait to serve you!</p>
                        </div>
                    </div>
                </div>
            </>

        </>

    );
};

export default Header;