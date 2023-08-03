// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBA-V85PoAxecXu-EnPgU36xnNVVAe_F6k",
  authDomain: "react-curso-fb48e.firebaseapp.com",
  projectId: "react-curso-fb48e",
  storageBucket: "react-curso-fb48e.appspot.com",
  messagingSenderId: "933690154357",
  appId: "1:933690154357:web:858942155c33401730c73c"
};

// Initialize Firebase
export const FirebaseApp = initializeApp( firebaseConfig );
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );
//estos tres objetos necesito para interactuar con firebase
//Configuracion de firebase en la consola VIDEO 277