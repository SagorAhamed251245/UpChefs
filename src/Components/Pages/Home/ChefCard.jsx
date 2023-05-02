import React from 'react';
import { Link } from 'react-router-dom';

const ChefCard = ({ chef }) => {
    
    const { picture, name, num_recipes, years_of_experience, likes , id} = chef
    return (
        <div className="card w-96 border-2 text-black bg-green-100 font-sans  hover:border-green-500  ">



            <img src={picture} className=" h-[230px]  rounded-2xl   object-cover" />



            <div className="card-body  text-start">
                <h2 className="card-title font-bold">{name}</h2>
                <p>
                    <span className='font-bold'>Years of experience:</span>
                    <span className='text-green-400 font-semibold text-2xl'> {years_of_experience}</span>

                </p>
                <p>
                    <span className='font-bold'>Numbers of recipes:</span>
                    <span className='text-green-400 font-semibold text-2xl'> {num_recipes}</span>
                </p>
                <p>
                    <span className='font-bold'>Likes:</span>
                    <span className='text-green-400 font-semibold text-2xl'> {likes}</span>
                </p>
                <div className="card-actions mt-5">
                    <Link to={`/chef/${id}`}><button className="my-btn font-bold">View Recipes</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;