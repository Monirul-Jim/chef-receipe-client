import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SingleData = ({ detail }) => {
    const [isFavourite, setIsFavourite] = useState(false);
    const { food_picture, recipe_name, ingredients, cooking_method, rating } = detail;
    const handleFavourite = () => {
        toast.success("Added to your favourite cart!",{
            position: "top-center",
        })
        setIsFavourite(true);
    }
    return (
        <div>

            <div className="card w-96 bg-base-100 shadow-xl mx-auto border-2">
                <figure className="aspect-w-1 aspect-h-1"><img className="object-cover" src={food_picture} alt="Food" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{recipe_name}</h2>

                    <div>
                        <h1 className='text-2xl underline decoration-indigo-700'>Ingredients</h1>
                        <ul>
                            {ingredients?.map(ingredient => (
                                <li key={ingredient}>{ingredient}</li>
                            ))}
                        </ul>
                    </div>
                    <h1 className='text-2xl font-bold underline'>How To Cook</h1>
                    <h1>{cooking_method}</h1>
                    <div className="badge badge-primary"><h1>Ratings: {rating}</h1></div>
                    <div className="card-actions justify-end">
                    <button
              onClick={handleFavourite}
              className="btn btn-secondary"
              disabled={isFavourite}
            >
              Favourite
            </button>
            <ToastContainer></ToastContainer>
                    </div>
                </div>
            </div>
           
        </div>

    );
};
//  className='object-cover w-full h-full'
export default SingleData;