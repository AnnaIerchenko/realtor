// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAMwjC9vIdQrbx9j14vwnJdRW53-v3eoqo",
  authDomain: "realtor-ff32d.firebaseapp.com",
  projectId: "realtor-ff32d",
  storageBucket: "realtor-ff32d.appspot.com",
  messagingSenderId: "79367850106",
  appId: "1:79367850106:web:f91a91385ddfa399f593c3"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()