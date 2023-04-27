import React, { createContext, useEffect, useState } from 'react';

// grtAuth tak copy kore ane import korlam
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // akta loader set kore debo
    const [loading , setLoading] = useState(true);

    // Signup er jonno akhn email password Authentication er kaj korbo
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // signIn /login er jonno akhn email password Authentication er kaj korbo
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // eiber signout er kaj korbo..

    const logOut = () => {
        return signOut(auth);
    }
    // to get the current user is by setting an observer on the Auth object..state ta upore set hoyei ache..
    // kaj ses a observe ta off korte ..const unsubscribe = ..eita dilam ar line--35-37 korlam
    useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);

            // state ta change hoye jabe tokhn loding ta false..mane state ta update kore felo
            setLoading(false);
        });
        // stop observing while unmounting...
        return () =>{
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading ,
        createUser,
        signIn,
        logOut
    }

    return (

        // value er moddhe authInfo tak share kore fello jno sobai ata k access korte pare

        <AuthContext.Provider value={authInfo}>
            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;