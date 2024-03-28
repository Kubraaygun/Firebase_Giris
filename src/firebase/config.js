// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvEoTOy_dXzQI7gCxXgBcyzqcN9Nu8uoM",
  authDomain: "chata-3f1f6.firebaseapp.com",
  projectId: "chata-3f1f6",
  storageBucket: "chata-3f1f6.appspot.com",
  messagingSenderId: "368171107225",
  appId: "1:368171107225:web:efdfd284e9723861564908"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//firebase kullanici yapisi referansi
export const auth = getAuth(app)

//Google saglayicisi kurulumu
export const provider= new GoogleAuthProvider();