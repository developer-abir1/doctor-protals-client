import React, { createContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import app from '../firebase.config';
import 'firebase/storage';
export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();

  const refresh = () => {
    return window.location.reload(true);
  };

  const createAccount = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateInfo = (userInfo) => {
    return updateProfile(auth.currentUser, userInfo);
  };

  const singIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const handleGoogleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (users) => {
      setUser(users);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    createAccount,
    singIn,
    logOut,
    updateInfo,
    handleGoogleLogin,
    user,
    loading,
    refresh,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
