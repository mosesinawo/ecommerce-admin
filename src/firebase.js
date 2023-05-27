// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBX_nG7THB0pJctOnhCTF5kSg7R9VBDrW0",
  authDomain: "shop-1523e.firebaseapp.com",
  projectId: "shop-1523e",
  storageBucket: "shop-1523e.appspot.com",
  messagingSenderId: "936527412109",
  appId: "1:936527412109:web:362026921991cebb849bc4",
  measurementId: "G-Z6370KFV5N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;

