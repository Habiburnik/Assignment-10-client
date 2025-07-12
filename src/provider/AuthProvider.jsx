import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config'


export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] =  useState(true);

    const googleProvider = new GoogleAuthProvider();


    const signInWithGoogle = () =>{
         return signInWithPopup(auth, googleProvider);
    }

    const createNewUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true);
        signOut(auth);
    }

    const userLogin = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (updatedData) => {
         return updateProfile(auth.currentUser, updatedData)
    }

    const authInfo = {
        user,
        setUser,
        signInWithGoogle,
        userLogin,
        loading,
        updateUserProfile,
        createNewUser,
        logOut
        
    }

    useEffect(() =>{
        const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unsubcribe();
        }

    },[])

        return <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
};

export default AuthProvider;