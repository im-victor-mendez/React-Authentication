// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

//To Find a way to use with .env file
const firebaseConfig = 
  {
    apiKey: "AIzaSyBooH2lrYw7IKt1YtELePbmdcItmqGjKt0",
    authDomain: "react-login-47279.firebaseapp.com",
    projectId: "react-login-47279",
    storageBucket: "react-login-47279.appspot.com",
    messagingSenderId: "577416143260",
    appId: "1:577416143260:web:f2e01878ecc583bb98a859",
    measurementId: "G-4BKP3MV4W5"
  }

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app)