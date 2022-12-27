import { createContext, useContext, useEffect } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
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
    async function signUp(email, password) {
        return await createUserWithEmailAndPassword(auth, email, password)
    }

    async function login(email, password) {
        const userCredentials = await signInWithEmailAndPassword(auth, email, password)
        return userCredentials
    }

    return <authContext.Provider value={{ signUp, login }}>{children}</authContext.Provider>
}