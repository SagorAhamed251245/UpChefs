import React from 'react';

const ChefCard = ({ chef }) => {
    console.log(chef)
    const { picture, name, num_recipes, years_of_experience, likes } = chef
    return (
        <div className="card w-96 border-2 text-black hover:border-green-500  ">



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
                <div className="card-actions">
                    <button className="my-btn">View Recipes</button>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;