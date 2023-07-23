import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmM5CLDyTooilSIEeJr53H4H8d63EpnsA",
  authDomain: "dede-indira-wedding.firebaseapp.com",
  projectId: "dede-indira-wedding",
  storageBucket: "dede-indira-wedding.appspot.com",
  messagingSenderId: "69507058893",
  appId: "1:69507058893:web:7f0e4338ddb1824c22ed84",
  measurementId: "G-3DF255SH35",
  databaseURL:
    "https://dede-indira-wedding-default-rtdb.asia-southeast1.firebasedatabase.app",
};

const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
export const database = getFirestore(app);
