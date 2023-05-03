import React from 'react';
import { useLoaderData } from 'react-router-dom';

const RecipesDetails = () => {
    const recipe = useLoaderData()
    console.log(recipe)
    return (
        <div>
            <h1>eee</h1>
        </div>
    );
};

export default RecipesDetails;