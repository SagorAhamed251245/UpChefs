import React from 'react';
import { createBrowserRouter, } from "react-router-dom";
import Main from '../Components/Main/Main';
import Home from '../Components/Pages/Home/Home';
import Blogs from '../Components/Pages/Blogs/Blogs';
import Register from '../Components/Pages/Register/Register';
import Login from '../Components/Pages/Login/Login';
import ChefDetails from '../Components/Pages/ChefDetails/ChefDetails';
import RecipesDetails from '../Components/Pages/RecipesDetails/RecipesDetails';
import PrivateRoute from './PrivateRoute';
import ErrorPage from '../Components/Pages/Error/ErrorPage';
import RecipesCard from '../Components/Pages/ChefDetails/RecipesCard';




const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
               
                loader: () => fetch('https://chef-recipe-hunter-server-side-sagorahamed251245.vercel.app/chefs')

            },
            {
                path: '/chef/:id',
                element: <PrivateRoute>
                    <ChefDetails></ChefDetails>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`https://chef-recipe-hunter-server-side-sagorahamed251245.vercel.app/chefs/${params.id}`)
            },
            {
                path: '/recipe/:id',
                element: <RecipesDetails></RecipesDetails>,
                loader: ({ params }) => fetch(`https://chef-recipe-hunter-server-side-sagorahamed251245.vercel.app/recipes/${params.id}`)

            },
            {
                path: '/blog',
                element: <Blogs></Blogs>
            },
            
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            }
        ]
    },
]);
export default router
