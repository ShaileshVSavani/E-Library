// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjAq-ot9HIbbwgTW3RaYFgxPSIHjNY_Ak",
  authDomain: "e-library-b5e61.firebaseapp.com",
  projectId: "e-library-b5e61",
  storageBucket: "e-library-b5e61.firebasestorage.app",
  messagingSenderId: "208361971745",
  appId: "1:208361971745:web:af4d7b926d38a5476c0360"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);