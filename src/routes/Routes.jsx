import React from 'react';
import {createBrowserRouter,} from "react-router-dom";
import Main from '../Components/Main/Main';
import Home from '../Components/Pages/Home/Home';
import Blogs from '../Components/Pages/Blogs/Blogs';
import Register from '../Components/Pages/Register/Register';
import Login from '../Components/Pages/Login/Login';




const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element:<Home></Home>,
                loader: () => fetch('https://chef-recipe-hunter-server-side-sagorahamed251245.vercel.app/chefs')
            
            },
            {
                path:'/blog',
                element:<Blogs></Blogs>
            },
            {
                path:'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element:<Register></Register>
            }
        ]
    },
]);
export default router
