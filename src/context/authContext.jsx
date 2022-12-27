import { createContext, useContext } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export const authContext = createContext()

/* Custom hook to use in all pages */
export function useAuth() {
    const context = useContext(authContext)
    
    if (!context) throw new Error(`There isn't an Authenticator Provider`)
    return context
}

/* Provides to all inside jsx the value property */
export function AuthProvider({ children }) {
    function signUp(email, password) {
        console.log(email, password)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    return <authContext.Provider value={{ signUp }}>{children}</authContext.Provider>
}