import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfsH85DaGRDJdzdJvhcwxWShjNlO-sqwI",
  authDomain: "chat-app-b9efa.firebaseapp.com",
  databaseURL: "https://chat-app-b9efa-default-rtdb.firebaseio.com",
  projectId: "chat-app-b9efa",
  storageBucket: "chat-app-b9efa.appspot.com",
  messagingSenderId: "589225405212",
  appId: "1:589225405212:web:1f44af328097e1acbd28d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
