import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAu2jreBdL4j54zxVLg_GW4UkwQm-OJIqg",
  authDomain: "lux-swipe.firebaseapp.com",
  projectId: "lux-swipe",
  storageBucket: "lux-swipe.appspot.com",
  messagingSenderId: "753573351434",
  appId: "1:753573351434:web:60a15f88adafc1d1afcff3",
  measurementId: "G-HN8CW8GT67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);