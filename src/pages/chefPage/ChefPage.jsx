import React from 'react';
import { Link } from 'react-router-dom';

const ChefPage = ({ data }) => {
    const {id, chef_picture, chef_name, years_of_experience, num_recipes, likes } = data
    return (
        <div>
            <div className="card w-96 h-96 bg-base-100 shadow-xl border-2 mx-auto mt-4 ">
                <figure><img className='object-cover w-full h-full' src={chef_picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name: {chef_name}</h2>
                    <p>Experience: {years_of_experience}</p>
                    <div className="card-actions">
                        <div className="badge badge-primary badge-outline">
                            <h1>Total Recipe:{num_recipes}</h1>
                        </div>
                        <div className="badge badge-secondary badge-outline">
                            <h1>Total Likes:{likes}</h1>
                        </div>
                    </div>
                   <Link to={`/category/${id}`}><button className="btn btn-active btn-primary w-full mt-2">View Details</button></Link>

                </div>
            </div>
        </div>
    );
};

export default ChefPage;