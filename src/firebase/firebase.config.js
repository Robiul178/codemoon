// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA4r33tw2zBgxQYQAE20CFka4UH0zqB3hA",
    authDomain: "codecademy-3b964.firebaseapp.com",
    projectId: "codecademy-3b964",
    storageBucket: "codecademy-3b964.appspot.com",
    messagingSenderId: "116793080631",
    appId: "1:116793080631:web:11169aa02f5baf1d5ab8b2",
    measurementId: "G-GW4ML1PE1H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;