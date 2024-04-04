// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGYFCrvdnz4dXheDh_sM_abfoREo2cFhw",
  authDomain: "dragon-auth-f0f23.firebaseapp.com",
  projectId: "dragon-auth-f0f23",
  storageBucket: "dragon-auth-f0f23.appspot.com",
  messagingSenderId: "1063296860113",
  appId: "1:1063296860113:web:b285a20b4dc26e95c82af0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;