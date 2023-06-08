import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';



export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
const [user,setUser] = useState(null);
const [loader,setLoader] = useState(true);

const googleSignIn = (googleProvider) => {
    setLoader(true);

return signInWithPopup(auth,googleProvider);
}
const createUser =(email,password) => {
  setLoader(true);

  return createUserWithEmailAndPassword(auth,email,password);
}
const signIn = (email,password) => {
  setLoader(true);

  return signInWithEmailAndPassword(auth,email,password);
}
const updateUserProfile = (profile) => {
  return updateProfile(auth.currentUser,profile);
}
const logOut = () => {
  setLoader(true);
  return signOut(auth);
}
useEffect(()=> {
  const unsubscribe = onAuthStateChanged(auth,newUser => {
    console.log('auth change' , newUser);
    setUser(newUser);
    setLoader(false);
  })
  return ()=> {
    unsubscribe();
  }
},[])

const authInfo = {user,
  updateUserProfile,
  loader,
  googleSignIn,
  logOut,
  createUser,
  signIn}
  return (
    <AuthContext.Provider value={authInfo}>
      {
        children
      }
    </AuthContext.Provider>
  );
};

export default AuthProvider;