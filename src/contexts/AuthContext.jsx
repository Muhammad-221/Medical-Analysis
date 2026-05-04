import auth from "@/firebase";
import {  createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile, updateEmail, updatePassword } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const signup = async(name, email, password) => {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(userCredential.user, {
            displayName: name
        });
        return userCredential;
    }
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };
    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
    };
    const updateName = (name) => {
        return updateProfile(user, {
            displayName: name
        });
    }
    const updateUserEmail = (email) => {
        return updateEmail(user, email)
    }
    const updateUserPassword = (password) => {
        return updatePassword(user, password )
    }
    const logout = () => signOut(auth);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
        });
        return () => {
            unsubscribe()
        }
    }, [])

    return (
        <AuthContext.Provider value={{ user, signup, login, logout, resetPassword, updateName, updateUserEmail, updateUserPassword }}>
        {!loading && children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

export const useAuth = () => {
    return useContext(AuthContext)
}