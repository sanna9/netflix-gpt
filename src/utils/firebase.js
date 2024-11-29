// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDALC3OHNWhR5d61UnyC8-i5gTsK3j2Xcw",
  authDomain: "netflix-3a0f1.firebaseapp.com",
  projectId: "netflix-3a0f1",
  storageBucket: "netflix-3a0f1.firebasestorage.app",
  messagingSenderId: "777277685681",
  appId: "1:777277685681:web:9eef7531751b7dd8868790",
  measurementId: "G-0KVZF87X15",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
