import { onAuthStateChanged } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react'
import { _Auth } from '../firebase/FirebaseBaas';

export let AuthUserContext = createContext();

export default function AuthContext({ children }) {
    let [userData, setUserData] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(_Auth, (userCredential) => {
            if (userCredential && userCredential.emailVerified) {
                setUserData(userCredential)
            } else {
                setUserData(null)
            }
        })

        return () => unsubscribe();
    }, []);

    return (
        <AuthUserContext.Provider value={{ userData }}>
            {children}
        </AuthUserContext.Provider>
    )
}
