// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBY1pLQyNTzXJnK6lmajkUen0BykdCqilI",
  authDomain: "migo-f989f.firebaseapp.com",
  projectId: "migo-f989f",
  storageBucket: "migo-f989f.firebasestorage.app",
  messagingSenderId: "980344311771",
  appId: "1:980344311771:web:55c9b7db01bd5361b1e1fe",
  measurementId: "G-EYG9PBYB8Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Inicializa Analytics (opcional)

// Exporta los servicios que usarás
export const auth = getAuth(app);
export const db = getFirestore(app);
