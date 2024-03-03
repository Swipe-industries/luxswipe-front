import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAu2jreBdL4j54zxVLg_GW4UkwQm-OJIqg",
  authDomain: "lux-swipe.firebaseapp.com",
  projectId: "lux-swipe",
  storageBucket: "lux-swipe.appspot.com",
  messagingSenderId: "753573351434",
  appId: "1:753573351434:web:60a15f88adafc1d1afcff3",
  measurementId: "G-HN8CW8GT67"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);