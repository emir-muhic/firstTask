// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDCTkI4JIMnYmUoBg5toB5z7URcPabbUgo",
  authDomain: "login-register-c28ce.firebaseapp.com",
  projectId: "login-register-c28ce",
  storageBucket: "login-register-c28ce.appspot.com",
  messagingSenderId: "827984631141",
  appId: "1:827984631141:web:2d22ac8cc76b048e58bd8c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize db and auth
export const db =  getFirestore(app);
export const auth = getAuth(app);