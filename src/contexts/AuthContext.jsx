import { onAuthStateChanged, signOut } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react'
import { _Auth } from '../firebase/FirebaseBaas';

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

    function logout() {
        signOut(_Auth)
            .then(() => {
                setUserData(null);
                toast.success("Logout Successfully!!");
            })
            .catch((error) => {
                toast.error(error.message || "Logout failed");
            });
    }


    return (
        <AuthUserContext.Provider value={{ userData, logout }}>
            {children}
        </AuthUserContext.Provider>
    )
}
