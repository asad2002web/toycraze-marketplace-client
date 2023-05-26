import React, { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  // create user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // Login Google
  const loginWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
   // LogIn with email and password
   const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
}
  //   Log out
  const logOut = () => {
    return signOut(auth);
  };
  //  Satate Change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      //   console.log(auth.currentUser);
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  // Auth Information
  const authInfo = {
    loginWithGoogle,
    createUser,
    user,
    logOut,
    logIn
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
