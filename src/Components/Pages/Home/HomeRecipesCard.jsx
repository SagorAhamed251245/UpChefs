import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const HomeRecipesCard = () => {
    const [recipesData, setRecipesData] = useState([])

    useEffect(() => {
        fetch(`https://chef-recipe-hunter-server-side-sagorahamed251245.vercel.app/recipes/`)
            .then(response => response.json())
            .then(data => setRecipesData(data))
    }, [])
     
   
    return (
        <div className=' flex overflow-hidden  gap-[20px] '>
                       
            {
                recipesData.map(recipe => <div className=" shadow-xl  mt-5 h-80 w-96 border-black  rounded-lg bg-slate-300">
                    <div className={`h-full w-full bg-cover rounded-lg`} style={{ 'backgroundImage': `url(${recipe.image} )` }}>
                        <Link  to={`/recipe/${recipe.id}`}><button className='my-btn font-bold'>View Details </button></Link>
                    </div>
                </div>)
            }
       </div>
    );
};

export default HomeRecipesCard;