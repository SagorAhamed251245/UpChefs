import React from 'react';
import './Banner.css'
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <div id='backgroundImage' className={` rounded-xl  w-full md:h-[400px] h-[300px]  lg:h-[570px]  `}>
            <div className='flex h-full flex-col items-center  justify-center w-1/2 mx-auto text-center'>
                <p className=' font-Playfair  text-white md:text-4xl text-3xl lg:text-6xl mt-24 font-semibold leading-normal'>We Will Provide <br /> World Number <br /> <span className='text-green-400'>One Chefs</span></p>
                
                <Link to=''>
                <button className='my-btn mt-2 md:mt-5 lg:mt-10 font-bold'>Learn More</button>
                </Link>
            </div>
        </div>
    );
};

export default Banner;
