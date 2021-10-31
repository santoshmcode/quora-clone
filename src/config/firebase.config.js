import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBrBGaIjWcE10iCrJSZEMNQFkPqsQAU5OM",
    authDomain: "quora-c3737.firebaseapp.com",
    projectId: "quora-c3737",
    storageBucket: "quora-c3737.appspot.com",
    messagingSenderId: "401750284768",
    appId: "1:401750284768:web:1bf2696a0d5d5cee357385",
};

// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const facebookProvider = new firebase.auth.FacebookAuthProvider();

const db = app.firestore();

export default db;
