// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
const firebaseConfig = {
  apiKey: 'AIzaSyAp8zCFshdevndu0KSEEhhswOkU6TtMYXI',
  authDomain: 'doctor-protal-auth.firebaseapp.com',
  projectId: 'doctor-protal-auth',
  storageBucket: 'doctor-protal-auth.appspot.com',
  messagingSenderId: '374249225824',
  appId: '1:374249225824:web:c6a689c5c0261ff95dcd05',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
