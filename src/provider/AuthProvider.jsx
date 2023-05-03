import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import app from '../../firebase.config.init';


export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user,setUser]=useState(null)

    const registerUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const loginUser=(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut=()=>{
        return signOut(auth)
    }
    useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,curUser=>{
        setUser(curUser)
        });
        return ()=>{
            unsubscribe()
        }
    },[])
    const updatePic=(profile)=>{
       return updateProfile(auth.currentUser,profile)
    }
    const authInfo = {
        user,
        registerUser,
        loginUser,
        logOut,
        updatePic
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;