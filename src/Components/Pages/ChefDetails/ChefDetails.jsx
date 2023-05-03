import React from 'react';
import { useLoaderData } from 'react-router-dom';
import RecipesCard from './RecipesCard';

const ChefDetails = () => {
    const chefDetails = useLoaderData()
    

    const { picture, name, num_recipes, years_of_experience, likes, short_bio , recipes } = chefDetails
    console.log(recipes)
    return (
        <div className='w-[90%] mx-auto mt-5 '>

            <div className="card card-side shadow-xl  ">
                <figure className='w-[60%] h-[500px]'><img className='object-cover' src={picture} alt="Movie" /></figure>
                <div className=" flex  items-center ml-10 text-start">
                    <div className='flex flex-col gap-3'>
                        <h2 className="card-title font-bold text-3xl">{name}</h2>
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
                        <p className='w-[60%]'>
                            <span className='font-bold text-black '>Bio: {short_bio}</span>

                        </p>
                    </div>
                    {/* <div className="card-actions mt-5">
                        <Link to={`/chef/${id}`}><button className="my-btn font-bold">View Recipes</button></Link>
                    </div> */}
                </div>
            </div>
            {/* heder end */}
                 <div className='flex  flex-wrap justify-between'>
                    {
                        recipes.map(recipe => <RecipesCard
                        key={recipe.id}
                        recipe={recipe}
                        ></RecipesCard>)
                    }
                 </div>

        </div>
    );
};

export default ChefDetails;