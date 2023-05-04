import React, { useContext, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';

const Login = () => {
    const { singUser, createUserWithGoogle , createUserWithGithub} = useContext(AuthContext)


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [successful, setSuccessful] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
   


    const handelLogin = (e) => {
        e.preventDefault();
        singUser(email, password)
            .then(result => {
                setSuccessful('Successfully Login')
                {location.state?.from?.pathname ? navigate(location.state.from.pathname) : navigate('/') }

            })
            .catch(error => {
                console.log(error)
                setError(error.message)

            })
    }
    const handleEmail = (e) => {
        const emailInput = e.target.value;
        setEmail(emailInput)
    }
    const handlePassword = (e) => {
        const passwordInput = e.target.value;
        setPassword(passwordInput);


    }
    const handelGoogleSingIn = () => {
        createUserWithGoogle()
            .then(result => {
                setSuccessful('Successfully Login')
                {location.state?.from?.pathname ? navigate(location.state.from.pathname) : navigate('/') }
            })
            .catch(error => {
                setError(error.message)
            })
    }
    const handelGithubSingIn = () => {
        createUserWithGithub()
            .then(result => {
                setSuccessful('Successfully Login')
                {location.state?.from?.pathname ? navigate(location.state.from.pathname) : navigate('/') }
            })
            .catch(error => {
                setError(error.message)
            })
    }
    return (

        <div className='flex items-center w-full h-[100vh] justify-center'>
            <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <form onSubmit={handelLogin} className="space-y-6 " >
                    <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h5>
                    <div>
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" name="email" id="email"
                            value={email}
                            onChange={handleEmail}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Your Email" required />
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
                            <label for="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                        </div>
                        <Link  href="#" className="ml-auto text-sm text-green-700 hover:underline dark:text-green-500">Forget Password?</Link>
                    </div>
                    <button type="submit" className="w-full text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Login to your account</button>



                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Not registered? <Link to='/register' state={location } className="text-green-700 hover:underline dark:text-green-500">Create account</Link>
                    </div>
                    {
                        error ? <p className='text-red-500 text-lg text-center font-bold'>{error}</p> : <p className='text-green-500 text-lg text-center  font-bold'>{successful}</p>
                    }
                </form>
                <div className='mb-5 mt-3'>
                    <button onClick={handelGoogleSingIn} className="w-full text-white bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800">
                        Login With Google</button>
                </div>
                <div className='mb-5'>
                    <button onClick={handelGithubSingIn} className="w-full text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800">
                        Login with Github</button> 
                </div>
                
            </div>
        </div>

    );
};

export default Login;