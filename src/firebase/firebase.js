import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDk3AF2JnXIHIx8u7-qNNh18FP9Rdqwkf4",
  authDomain: "levelup-by-teo.firebaseapp.com",
  projectId: "levelup-by-teo",
  storageBucket: "levelup-by-teo.appspot.com",
  messagingSenderId: "77394093102",
  appId: "1:77394093102:web:b2b848196ab4c0a50d2bbf",
  measurementId: "G-5HMS4DST2P"

};

const app = initializeApp(firebaseConfig);

const storage = getStorage(app); // Initialize the storage service

export { storage as default };