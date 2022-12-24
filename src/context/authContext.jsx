import { createContext, useContext } from "react";

export const authContext = createContext()

/* Custom hook to use in all pages */
export function useAuth() {
    const context = useContext(authContext)
    
    if (!context) throw new Error(`There isn't an Authenticator Provider`)
    return context
}

/* Provides to all inside jsx the value property */
export function AuthProvider({ children }) {
    const user = {}
    return <authContext.Provider value={{ user }}>{children}</authContext.Provider>
}