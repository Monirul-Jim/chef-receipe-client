import React from 'react';

const SingleData = ({detail}) => {
    const {recipe_name,ingredients,cooking_method,rating}=detail
    return (
        <div>
            <p>{recipe_name}</p>
        </div>
    );
};

export default SingleData;