"use client"

import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../../lib/firebase";

const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
 
    useEffect(() => {
        setIsLoading(true);
        const unsub = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                localStorage.setItem("user", "loggedIn"); // Update localStorage
            } else {
                setUser(null);
                localStorage.removeItem("user"); // Clear localStorage on logout
            }
            setIsLoading(false);
        });
        return () => unsub();
    }, []);
    

    const handleSignInWithGoogle = async () => {
        setIsLoading(true);
        try {
            const result = await signInWithPopup(auth, new GoogleAuthProvider());
            setUser(result.user); // Update the user state directly
        } catch (error) {
            setError(error?.message);
        }
        setIsLoading(false);
    };
    
    const handleLogout = async () => {
        setIsLoading(true);
        try {
            await signOut(auth);
            setUser(null); // Clear the user state
        } catch (error) {
            setError(error?.message);
        }
        setIsLoading(false);
    };
    

    return <AuthContext.Provider
        value={{
            user,
            isLoading,
            error,
            handleSignInWithGoogle,
            handleLogout,
        }}
    >
        {children}
    </AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext);