import React from 'react';

const Footer = () => {
    return (
        <>

            <footer class=" bg-gray-900 mt-20">
                <div class="max-w-2xl mx-auto text-white py-10">
                    <div class="text-center">
                        <h3 class="text-3xl mb-3 font-Playfair font-bold"> To Hire Our Chefs </h3>
                        <p>Eat healthy and Stay healthy </p>
                        <div class="flex gap-5  justify-center my-10">
                            
                                <input className='bg-transparent border p-1 w-[300px] rounded-md text-white px-3' type="email" placeholder='your Email' />
                           
                           
                                <button className='my-btn font-bold'>Contact Us</button>
                            
                        </div>
                    </div>
                    <div class="mt-28 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
                        <p class="order-2 md:order-1 mt-8 md:mt-0"> &copy; All Copyright owned UpChef 2023. </p>
                        <div class="order-1 md:order-2">
                            <span class="px-2">About us</span>
                            <span class="px-2 border-l">Contact us</span>
                            <span class="px-2 border-l">Privacy Policy</span>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;