import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, updateProfile, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
import { useEffect } from 'react';
import { useState } from 'react';



export const AuthContext = createContext(null)
const auth = getAuth(app);



const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    
    

    const createUser = (email, password) => {


        return createUserWithEmailAndPassword(auth, email, password)
    }
    const setUserProfile = (name, photo) => {

        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }
    const singUser = (email, password) => {

        return signInWithEmailAndPassword(auth , email, password)
    }

    const logOut = () => {

        return signOut(auth)
    }


    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, loggedUser => {

            setUser(loggedUser)


        })

        return () => {
            unsubscribe();
        }
    }, [])


    
    const authInfo = {
        user,
        createUser,
        singUser,
        logOut,
        setUserProfile,
        
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;