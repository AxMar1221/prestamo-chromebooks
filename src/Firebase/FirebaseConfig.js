import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDJSxF7DixsAk3k9tLBHL5VVuAXlqbD4eE",
    authDomain: "prestamo-chromebooks-4bb4f.firebaseapp.com",
    projectId: "prestamo-chromebooks-4bb4f",
    storageBucket: "prestamo-chromebooks-4bb4f.firebasestorage.app",
    messagingSenderId: "610661398875",
    appId: "1:610661398875:web:78ddd946318201e569827e",
    measurementId: "G-1GJT691GN0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);

googleProvider.setCustomParameters({
  prompt: 'select_account'
});