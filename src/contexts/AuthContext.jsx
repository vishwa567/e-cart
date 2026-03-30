import { onAuthStateChanged } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react'
import { _Auth } from '../firebase/FirebaseBaas';
import axios from 'axios';

export let AuthUserContext = createContext();

export default function AuthContext({ children }) {
    let [userData, setUserData] = useState(null);

    //! Auth Changes
    function authChanges() {
        return onAuthStateChanged(_Auth, (userCredential) => {
            if (userCredential && userCredential.emailVerified) {
                setUserData(userCredential);
            } else {
                setUserData(null);
            }
        });
    }
    useEffect(() => {
        const unsubscribe = authChanges();
        return () => unsubscribe();
    }, []);


    return (
        <AuthUserContext.Provider value={{ userData }}>
            {children}
        </AuthUserContext.Provider>
    )
}
