// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPAQbEp6FhpT9SOYqXMDWhlpJAhSJHXyo",
  authDomain: "ibai-eb649.firebaseapp.com",
  databaseURL: "https://ibai-eb649-default-rtdb.firebaseio.com/",
  projectId: "ibai-eb649",
  storageBucket: "ibai-eb649.appspot.com",
  messagingSenderId: "271483782016",
  appId: "1:271483782016:web:8fc7436f282d044f6b7765",
  measurementId: "G-J5BNWZK4MW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);