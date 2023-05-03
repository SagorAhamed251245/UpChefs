import { list } from 'postcss';
import React from 'react';
import { Link } from 'react-router-dom';

const RecipesCard = ({ recipe }) => {

    const { name, image, ingredients, cooking_method, rating , id} = recipe

    return (
        <div className=" shadow-xl  mt-5 h-[650px] w-96 border-black  rounded-lg bg-green-200">
            <div className={`h-[30%] w-full bg-cover rounded-lg`} style={{ 'backgroundImage': `url(${image} )` }}>
            </div>


            <div className="  pl-2 mt-3 text-start h-[70%]">
                <div className='flex flex-col  h-full'>
                    <h2 className="font-bold text-3xl">{name}</h2>
                    <p>
                        <span className='font-bold'>Ingredients:

                            <ol className='list-decimal '>
                                {
                                    ingredients?.map(item => <li className='ml-24'>{item}</li>)
                                }
                            </ol>

                        </span>
                        <span className='text-green-400 font-semibold text-2xl'> { }</span>

                    </p>
                    <p className='pr-2  '>
                        <span className='font-bold break-words'>Cooking Method:</span> {cooking_method?.slice(0, 200)}...
                    </p>
                    <p className=''>
                        <span className='font-bold'>Rating:</span> {rating}
                    </p>
                    <div className='w-[100%] mt-auto mb-8 flex pr-2 justify-between'>
                        <Link to={`/recipe/${id}`}>
                            <button className='my-btn font-bold '>Learn More</button>
                        </Link>
                        
                            <button className='my-btn font-bold'>Add to fev</button>
                       

                    </div>
                </div>

            </div>
        </div>
    );
};

export default RecipesCard;