import React from 'react';

const Banner = () => {
    return (
        <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Yl4WI7Jzq9ow4ZjLsa4Op4yM3EVEYstpSviA5_orUIoiHGixs1kXye66reg68xUIt9g&usqp=CAU')" }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                <h1 className="text-5xl font-bold tracking-widest mb-4">Indulge in a Luxurious Dining Experience</h1>
                <p className="text-xl">Experience the finest culinary delights and impeccable service at our upscale restaurant.</p>
                <div className="mt-8">
      <p className="text-sm font-light">Join us for a memorable evening of world-class cuisine, handcrafted cocktails, and exceptional service.</p>
      <p className="text-sm font-light mt-2">Our menu features the freshest, locally-sourced ingredients, expertly prepared by our award-winning chefs.</p>
      <p className="text-sm font-light mt-2">Whether you're celebrating a special occasion or simply enjoying a night out, our luxurious atmosphere and attentive staff will ensure an unforgettable experience.</p>
    </div>
                <button className="bg-white text-black px-6 py-2 mt-8 rounded-full hover:bg-gray-200">Make a Reservation</button>
            </div>
        </div>

    );
};

export default Banner;