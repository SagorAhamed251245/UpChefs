import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';


const Header = () => {
    const { user, logOut, loading } = useContext(AuthContext)

 


    return (
        <nav className={`mx-5 ${loading && 'hidden'}`}>
            <div className="navbar justify-between   ">
                <div >
                    <p className=" normal-case font-extrabold text-xl md:text-3xl">UpChefs</p>
                </div>
                <div className='flex gap-5  font-semibold '>

                    <NavLink to='/'
                        className={({ isActive }) => (isActive ? 'text-green-500' : 'hover:text-green-500')}>Home
                    </NavLink>
                    <NavLink to='/blog' className={({ isActive }) => (isActive ? 'text-green-500' : 'hover:text-green-500')}>Blog</NavLink>

                    <NavLink to='/recipes' className={({ isActive }) => (isActive ? 'text-green-500' : 'hover:text-green-500')}>Recipes</NavLink>

                    <NavLink to='/chefs' className={({ isActive }) => (isActive ? 'text-green-500' : 'hover:text-green-500')}>Chefs</NavLink>



                </div>

                <div className="flex-none">
                    <div className='flex gap-5 mr-3 font-semibold'>
                        {
                            user ? <>
                                <button onClick={logOut} className='my-btn'>
                                    LogOut
                                </button>
                            </> : <>
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
                            </>
                        }

                    </div>
                    {user ? <>
                        <div className="tooltip  tooltip-bottom" data-tip={user.displayName}>
                            <label className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full tooltip" data-tip="hello">
                                    <img className=''  src={user.photoURL} />
                                </div>
                            </label>
                               
                        </div>
                    </> : ''

                    }
                </div>
            </div>
        </nav>
    );
};

export default Header;