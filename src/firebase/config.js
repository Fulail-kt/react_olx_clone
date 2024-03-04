import { initializeApp } from 'firebase/app';
import * as firebaseAuth from "firebase/auth";
import * as firestore from "firebase/firestore";
import * as storage from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyAJPL2EsvfZlLIDJ1N4eAJDdEC9A_aqNmM",
  authDomain: "olx-react-1429c.firebaseapp.com",
  projectId: "olx-react-1429c",
  storageBucket: "olx-react-1429c.appspot.com",
  messagingSenderId: "452265299668",
  appId: "1:452265299668:web:af0474f8b5963ec0c97541",
  measurementId: "G-EWQ0T7X07Y"
};

const app = initializeApp(firebaseConfig);
const db = firestore.getFirestore();

const firebaseExports = { app, db, firebaseAuth, firestore, storage };
export default firebaseExports;