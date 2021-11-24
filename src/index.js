import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes/App';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

ReactDOM.render(<App />, document.getElementById('app'));

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8AofA-yr5jPKT94Ag__eGixPa7Rr2Kw8",
  authDomain: "landing-toycode.firebaseapp.com",
  projectId: "landing-toycode",
  storageBucket: "landing-toycode.appspot.com",
  messagingSenderId: "836123212573",
  appId: "1:836123212573:web:10ed0cf7faeabe93f3fff4",
  measurementId: "G-TQPMHJ78Y9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
