// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9s0AUiBOYZ2q6evRzECA4kSi01ckdkuE",
  authDomain: "corte-ingles---proyecto.firebaseapp.com",
  projectId: "corte-ingles---proyecto",
  storageBucket: "corte-ingles---proyecto.appspot.com",
  messagingSenderId: "799007983830",
  appId: "1:799007983830:web:778b19b794d6725668a177"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;