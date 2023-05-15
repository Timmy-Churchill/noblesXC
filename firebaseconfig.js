
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
  apiKey: "AIzaSyAmoyn--1Wem0qjZdIfyB6KGgVgikygUrg",
  authDomain: "nobles-xc.firebaseapp.com",
  databaseURL: "https://nobles-xc-default-rtdb.firebaseio.com",
  projectId: "nobles-xc",
  storageBucket: "nobles-xc.appspot.com",
  messagingSenderId: "570933899242",
  appId: "1:570933899242:web:9acace1f809c775dab4c93",
  measurementId: "G-28R3JJB9WZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export default database;