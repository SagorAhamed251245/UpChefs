import React from 'react';
import errorImage from '../../../assets/errorPhoto.png'
import { Link, useRouteError } from "react-router-dom";
const ErrorPage = () => {
    const error = useRouteError();

    return (


        < >

            <img className=" h-screen w-full object-cover" src={errorImage} />


            <div className='absolute top-3/4  flex flex-col w-full justify-center text-center gap-5'>
                <p className=" text-2xl font-bold text-center text-black ">
                    <span className="text-black text-5xl">Oops!</span> Page{" "}
                    {error.statusText}
                </p>
                <p className="text-center text-black font-bold md:text-lg">
                    The page you’re looking for doesn’t exist.
                </p>
                <div>
                <Link
                    to="/"
                    className="my-btn  font-bold"
                >
                    Go home
                </Link>
                </div>
            </div>


        </>
    );

};

export default ErrorPage;