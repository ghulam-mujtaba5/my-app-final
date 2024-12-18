
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRFyYDKos7T88GUeESi_n2q_Jkrvc5Wx8",
  authDomain: "lab-final-edu-app.firebaseapp.com",
  projectId: "lab-final-edu-app",
  storageBucket: "lab-final-edu-app.firebasestorage.app",
  messagingSenderId: "893822147094",
  appId: "1:893822147094:web:5ee4001bf041a63f40f337",
  measurementId: "G-S80NPQ0LNN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;