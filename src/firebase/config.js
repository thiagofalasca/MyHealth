import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyBOkQSosDSbUR67c_TarEqBZdl4-IHfeoU",
  authDomain: "myhealth-52d50.firebaseapp.com",
  projectId: "myhealth-52d50",
  storageBucket: "myhealth-52d50.appspot.com",
  messagingSenderId: "32602053712",
  appId: "1:32602053712:web:74d6fb74e0a7c25e6bc555"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const db = getFirestore(app)

const storage = getStorage(app)

export { auth, db, storage }