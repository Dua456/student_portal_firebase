// Import Firebase modules from CDN
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';
import {
    getDatabase,
    ref,
    set,
    get,
    onValue
} from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js';

// Firebase configuration
// IMPORTANT: Replace these with your own Firebase project credentials
const firebaseConfig = {
    apiKey: "AIzaSyAOUpznTf7-ceVpFR6qZ9xKmc1bXWb8HOE",
    authDomain: "project2-f7d64.firebaseapp.com",
    databaseURL: "https://project2-f7d64-default-rtdb.firebaseio.com",
    projectId: "project2-f7d64",
    storageBucket: "project2-f7d64.firebasestorage.app",
    messagingSenderId: "861643591607",
    appId: "1:861643591607:web:0b917a991817ed8e54a232",
    measurementId: "G-SKW7KZT5GW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

// Export Firebase services
export {
    auth,
    database,
    ref,
    set,
    get,
    onValue,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
};