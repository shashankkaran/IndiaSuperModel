import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import firebase from 'firebase/compat/app';
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

firebase.initializeApp(firebaseConfig);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

