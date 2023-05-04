import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, updateProfile, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import app from '../firebase/firebase.config';
import { useEffect } from 'react';
import { useState } from 'react';




export const AuthContext = createContext(null)
const auth = getAuth(app);



const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

   
    
    
    const provider =  new GoogleAuthProvider()
    const githubProvider =  new GithubAuthProvider()

    const createUserWithGoogle = () => {
       return signInWithPopup(auth, provider)
    }
    const createUserWithGithub = () => {
       return signInWithPopup(auth, githubProvider)
    }
    const createUser = (email, password) => {

        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const setUserProfile = (name, photo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }
    const singUser = (email, password) => {
        setLoading(true)

        return signInWithEmailAndPassword(auth , email, password)
    }

    const logOut = () => {
        setLoading(true)

        return signOut(auth)
    }


    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, loggedUser => {

            setUser(loggedUser)
            setLoading(false)


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
        loading,
        createUserWithGoogle,
        createUserWithGithub
        
        
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;