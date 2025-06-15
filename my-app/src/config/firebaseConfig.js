// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBzj4qu-Gwq0GiNnH4VpouXvuMskQ5Pel4",
  authDomain: "appmy-28bf8.firebaseapp.com",
  projectId: "appmy-28bf8",
  storageBucket: "appmy-28bf8.appspot.com",
  messagingSenderId: "1010049580716",
  appId: "1:1010049580716:web:3f360f62fbb8dfb009e909",
  measurementId: "G-6T1BNRL2QZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googlepro = new GoogleAuthProvider();
