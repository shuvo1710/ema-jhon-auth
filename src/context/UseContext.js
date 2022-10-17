import React, { createContext, useEffect, useState} from 'react';
import app from '../firebase/firebase.init';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'


export const AuthContext = createContext();
const auth = getAuth(app)
const UserContext = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser =(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn =(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)

    }
    const logOut=()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log('on state change', currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return ()=> unSubscribe()
    },[])

    const userInfo = {user,loading, createUser, signIn, logOut }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;