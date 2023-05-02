import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='mx-5'>
            <div className="navbar justify-between   ">
                <div >
                    <p className=" normal-case font-extrabold text-xl md:text-3xl">UpChefs</p>
                </div>
                <div className='flex gap-5  font-semibold '>
                    <Link to='/' className='hover:text-green-500'>Home</Link>
                    <Link to='/blog' className='hover:text-green-500'>Blog</Link>
                    <Link to='/blog' className='hover:text-green-500'>Recipes</Link>
                    <Link to='/blog' className='hover:text-green-500'>Chefs</Link>
                    


                </div>

                <div className="flex-none">
                    <div className='flex gap-5 mr-3 font-semibold'>
                        <Link to='/login' >
                            <button className='my-btn'>
                                Login
                            </button>
                        </Link>
                        <Link to='/register' >
                            <button className='my-btn'>
                                Register
                            </button>
                        </Link>
                    </div>
                    <div className="">
                        <label className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </label>

                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;