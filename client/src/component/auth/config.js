// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXkO_in8zj4gq9eZD61fI8qQMC731FV2k",
  authDomain: "inspiredtech-94bb7.firebaseapp.com",
  projectId: "inspiredtech-94bb7",
  storageBucket: "inspiredtech-94bb7.appspot.com",
  messagingSenderId: "339639503951",
  appId: "1:339639503951:web:c1e0c58b5381f8240aae3a",
  measurementId: "G-GHX1YSXQEP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();
const analytics = getAnalytics(app);
export { auth, provider, signInWithPopup, GoogleAuthProvider };
