
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAjwJvGunBYngqKFO2JhusgXHM2GpiCWK4",
    authDomain: "ecommerce-app-6f62c.firebaseapp.com",
    projectId: "ecommerce-app-6f62c",
    storageBucket: "ecommerce-app-6f62c.firebasestorage.app",
    messagingSenderId: "45947734668",
    appId: "1:45947734668:web:d1260928e7c393077009a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);