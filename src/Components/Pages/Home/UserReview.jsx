import React from 'react';

import user from '../../../assets/user.png'

const UserReview = () => {
    return (

        <div class="w-full max-w-sm bg-[#d7e9ff] border mt-10 border-black-200 rounded-lg shadow dark:bg-black-800 dark:border-black-700">
            <div class="flex justify-end px-4 pt-4">
                
                
               
            </div>
            <div class="flex flex-col items-center pb-10">
                <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src={user} alt="Bonnie image" />
               
                <span class="text-xl text-black-500 font-bold dark:text-black-400">Smith Jhone</span>
                <p className='p-3 text-center'>
                I hired John Smith for a dinner party and was blown away by his skills in the kitchen. He was professional, friendly, and accommodating to all of our requests. The food was delicious and beautifully presented. The only reason I'm not giving a full 5 stars is because the dessert didn't quite live up to the rest of the meal, but it was still enjoyable. Overall, I highly recommend John Smith for any special occasion!
                </p>
                <div class=" mt-4  md:mt-6 ">
                    <p><span className='font-bold text-black  text-sm'>User Rating: </span><span className='font-bold text-red-500  text-lg '> 4.5</span></p>
                </div>
            </div>
        </div>

    );
};

export default UserReview;