import React, { createContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import app from '../firebase.config';
import 'firebase/storage';
export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (users) => {
      if (users.uid) {
        setUser(users);
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleFileUpload = async (image) => {
    const file = image;
    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(file.image);
    await fileRef.put(file);
    const url = await fileRef.getDownloadURL();
    setImageUrl(url);
    fileInput.current.value = '';
  };

  const authInfo = {
    createAccount,
    singIn,
    logOut,
    updateInfo,
    user,
    loading,
    refresh,
    setLoading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
