
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RecipesCard = ({ recipe }) => {
    const [bookmark , setBookmark ]= useState(true)

    const { name, image, ingredients, cooking_method, rating , id} = recipe

    const handelBookmark = () =>{
        toast.success("Add to Favorite");
        setBookmark(false)
        console.log('clicked')
    }

    return (
        <div className=" shadow-xl  mt-5 h-[700px] w-[550px] border-black  rounded-lg ">
            <div className={`h-[40%] w-full bg-cover rounded-lg`} style={{ 'backgroundImage': `url(${image} )` }}>
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
                    <div className='w-[100%] mt-auto mb-24 flex pr-2 justify-between'>
                        <Link to={`/recipe/${id}`}>
                            <button className='my-btn font-bold '>Learn More</button>
                        </Link>
                        
                            <button disabled={!bookmark} onClick={handelBookmark} className={` ${bookmark ?' my-btn font-bold' : 'btn-disabled font-bold'}`}>Add to fev</button>
                       

                    </div>
                </div>

            </div>
        </div>
    );
};

export default RecipesCard;