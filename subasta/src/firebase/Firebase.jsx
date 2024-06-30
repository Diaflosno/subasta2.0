// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, signOut } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCByQKJcc6yJfxAkQMi_URrJtutWxG0DIE",
  authDomain: "subasta-fd9f9.firebaseapp.com",
  projectId: "subasta-fd9f9",
  storageBucket: "subasta-fd9f9.appspot.com",
  messagingSenderId: "505880147922",
  appId: "1:505880147922:web:38d35fb2ca6670b18bfa0b"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const firestore = getFirestore(app);

export { db }
export const imageDb = getStorage(app);
export const auth = getAuth(app);
export { signOut };
export default firestore;