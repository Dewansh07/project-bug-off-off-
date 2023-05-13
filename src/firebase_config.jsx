// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
import { getStorage, ref } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "",
//   authDomain: "",
//   projectId: "",
//   storageBucket: "",
//   messagingSenderId: "",
//   appId: "",
//   measurementId: ""
// };

const firebaseConfig = {
  apiKey: "AIzaSyD_U2JRUP1fVfmmnpi3-0kOrkcF51CFNgk",
  authDomain: "fir-7c218.firebaseapp.com",
  projectId: "fir-7c218",
  storageBucket: "fir-7c218.appspot.com",
  messagingSenderId: "403007816695",
  appId: "1:403007816695:web:0992b46c59721e4875a4f2",
  measurementId: "G-DXPSZJG98Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage()
export const db = getFirestore(app);