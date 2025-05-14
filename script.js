// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASixrWVG6fpUAPSgV7KpZRlx7emGY7bBU",
  authDomain: "login-app-f2634.firebaseapp.com",
  databaseURL: "https://login-app-f2634-default-rtdb.firebaseio.com",
  projectId: "login-app-f2634",
  storageBucket: "login-app-f2634.firebasestorage.app",
  messagingSenderId: "763324936906",
  appId: "1:763324936906:web:0d1558b482b6ea77147a33",
  measurementId: "G-YG1GQEYRFW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);