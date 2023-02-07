import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBzQ0hh67J3wmjPb_FBf19W3Wg5F2Og8og",
  authDomain: "linkedin-auth-74328.firebaseapp.com",
  projectId: "linkedin-auth-74328",
  storageBucket: "linkedin-auth-74328.appspot.com",
  messagingSenderId: "1041857457876",
  appId: "1:1041857457876:web:f61d9fcc788040e78d9541",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

const db = getFirestore(app);
export { auth, db };
