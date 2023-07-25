import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyDHx74hHmaq-xdIR-oRbYDzyVKeToMejvQ",
    authDomain: "mobileproject-2bb0d.firebaseapp.com",
    projectId: "mobileproject-2bb0d",
    storageBucket: "mobileproject-2bb0d.appspot.com",
    messagingSenderId: "442157819630",
    appId: "1:442157819630:web:5be7a660e358cbae20f5ff"
  };

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const db = getFirestore(app)

const storage = getStorage(app)

export { auth, db, storage }