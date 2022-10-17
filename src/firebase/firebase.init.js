// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVgO_0WSr30afde1Mi_NwZqKdGH3Z5oJI",
  authDomain: "fir-simple-auth-5f50b.firebaseapp.com",
  projectId: "fir-simple-auth-5f50b",
  storageBucket: "fir-simple-auth-5f50b.appspot.com",
  messagingSenderId: "225329472223",
  appId: "1:225329472223:web:5718f0e7fbc79d49b8bf6a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;