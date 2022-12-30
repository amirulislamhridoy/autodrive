// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: process.env.apiKey,
  // authDomain: process.env.authDomain,
  // projectId: process.env.projectId,
  // storageBucket: process.env.storageBucket,
  // messagingSenderId: process.env.messagingSenderId,
  // appId: process.env.appId,
  apiKey: "AIzaSyAk2D3YZYWjmeqdBycK-lcVmHlNJVqt_pE",
  authDomain: "emapil-password-auth.firebaseapp.com",
  projectId: "emapil-password-auth",
  storageBucket: "emapil-password-auth.appspot.com",
  messagingSenderId: "298318253183",
  appId: "1:298318253183:web:17acc0ace56652cc53434a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth

  // apiKey: "AIzaSyAk2D3YZYWjmeqdBycK-lcVmHlNJVqt_pE",
  // authDomain: "emapil-password-auth.firebaseapp.com",
  // projectId: "emapil-password-auth",
  // storageBucket: "emapil-password-auth.appspot.com",
  // messagingSenderId: "298318253183",
  // appId: "1:298318253183:web:17acc0ace56652cc53434a"