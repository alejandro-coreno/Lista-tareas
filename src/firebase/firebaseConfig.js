// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgUvCZ6kRWt09GWXDEEiMoa9xdKRBbOYM",
  authDomain: "lista-tareas-1b54a.firebaseapp.com",
  projectId: "lista-tareas-1b54a",
  storageBucket: "lista-tareas-1b54a.appspot.com",
  messagingSenderId: "349982185542",
  appId: "1:349982185542:web:d12ca1909e0a898b1a5247"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);