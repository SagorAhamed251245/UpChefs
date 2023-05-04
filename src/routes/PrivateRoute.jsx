import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user , loading} = useContext(AuthContext)

    const location = useLocation()

    console.log(location)

    if (loading) {
        return <div className='w-full h-screen flex items-center justify-center'>
            <div
        class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status">
        <span
          class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
          >Loading...</span>
      </div>
        </div>
        
    }

 if (user) {
        return children
    }
    else {
        return <Navigate state={{from: location }} to='/login'  replace></Navigate>
    }
    ;
};

export default PrivateRoute;