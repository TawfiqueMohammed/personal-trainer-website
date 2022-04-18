// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB7UuRaTRRNrQWdq9CbRiSmCkK5t0WY2bU",
    authDomain: "assignment-10-ba170.firebaseapp.com",
    projectId: "assignment-10-ba170",
    storageBucket: "assignment-10-ba170.appspot.com",
    messagingSenderId: "44544402949",
    appId: "1:44544402949:web:3096eb5b47005c792d1e6c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;