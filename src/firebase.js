// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfitOt6f-eKIoCuJKVucAUdU1wTeeU_K0",
  authDomain: "northeastindiasupermodel-63133.firebaseapp.com",
  projectId: "northeastindiasupermodel-63133",
  storageBucket: "northeastindiasupermodel-63133.appspot.com",
  messagingSenderId: "103151269694",
  appId: "1:103151269694:web:c0dd41d47bb9d89daa5e6f",
  measurementId: "G-173WLVEPFH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
var db = getFirestore();
export { db };