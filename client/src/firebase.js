// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API,
  authDomain: "mern-egrapes.firebaseapp.com",
  projectId: "mern-egrapes",
  storageBucket: "mern-egrapes.appspot.com",
  messagingSenderId: "263262305034",
  appId: "1:263262305034:web:040efd927d494b353658f3"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);