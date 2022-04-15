// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCUc5vnh1Vh2y1fvVZgXW2fuX1LnPYHJ-o",
    authDomain: "ema-john-simple-6495e.firebaseapp.com",
    projectId: "ema-john-simple-6495e",
    storageBucket: "ema-john-simple-6495e.appspot.com",
    messagingSenderId: "301990137357",
    appId: "1:301990137357:web:0189ede20800ede7208f44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;