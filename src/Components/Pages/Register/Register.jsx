import React, { useContext, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';

const Register = () => {
    const { createUser, setUserProfile} = useContext(AuthContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [successful , setSuccessful ] = useState('')
    const [error, setError] = useState('')
    
   const location = useLocation()
   console.log(location)
const navigate = useNavigate()

    const handelSingUpUser = (e) => {
        e.preventDefault();
        const form = e.target;
        const userName = form.name.value ;
        const photo = form.photo.value

        createUser(email,password )
        .then(result => {
           setUserProfile(userName , photo)
           setSuccessful('Successfully Login')
           {location.state?.state?.from?.pathname ? navigate(location.state.state.from.pathname) : navigate('/') }
              
        }
            )
        .catch(error => {
            setError(error.message)
        });


       


    }

    const handleEmail = (e)=> {
        const emailInput = e.target.value;
        
        setEmail(emailInput)

    }
    const handlePassword = (e) => {
        const passwordInput = e.target.value;
        setPassword(passwordInput);
        
    }

    return (
        <div className='flex items-center w-full h-[100vh] justify-center'>
            <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <form onSubmit={handelSingUpUser} className="space-y-6 " >
                    <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign Up to our platform</h5>
                    <div>
                        <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                        <input type="text" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Your Name" required />
                    </div>
                    <div>
                        <label for="photo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Profile Photo</label>
                        <input type="text" name="photo" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Photo Url" required />
                    </div>
                    <div>
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" name="email" id="email"
                        value={email}
                        onChange={handleEmail}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Your name" required />
                    </div>
                    <div>
                        <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input type="password" name="password" id="password"
                            value={password}
                            onChange={handlePassword}
                            placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                    </div>
                    <div className="flex items-start">

                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-green-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-green-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" />
                            </div>
                            <label for="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Accept our Condition</label>
                        </div>
                    </div>
                    <button type="submit" className="w-full text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Register to your account</button>
                    
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Have an account? <Link to='/login' className="text-green-700 hover:underline dark:text-green-500">Login</Link>
                    </div>
                    {
                        error ? <p className='text-red-500 text-lg text-center font-bold'>{error}</p> : <p className='text-green-500 text-lg text-center  font-bold'>{successful}</p>
                    }
                </form>
            </div>
        </div>
    );
};

export default Register;