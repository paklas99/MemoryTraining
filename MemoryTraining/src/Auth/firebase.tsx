// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0YgT-mXVC30yyaVW06nFnUEXaylMrCew",
  authDomain: "memorytraining-73e0b.firebaseapp.com",
  projectId: "memorytraining-73e0b",
  storageBucket: "memorytraining-73e0b.appspot.com",
  messagingSenderId: "531310222579",
  appId: "1:531310222579:web:959c183c7c5abf46e46b86",
  measurementId: "G-GYVYTJYHG5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);