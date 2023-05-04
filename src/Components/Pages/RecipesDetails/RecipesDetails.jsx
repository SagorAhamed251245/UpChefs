import React from 'react';
import { useLoaderData } from 'react-router-dom';
import RecipesCard from '../ChefDetails/RecipesCard';

const RecipesDetails = () => {
    const recipe = useLoaderData()
    console.log(recipe)
    
};

export default RecipesDetails;