import conf from "../conf/conf.js";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: conf.firebaseApiKey,
  authDomain: conf.firebaseAuthDomain,
  projectId: conf.firebaseProjectID,
  storageBucket: conf.firebaseStorageBucket,
  messagingSenderId: conf.firebaseMessagingSenderId,
  appId: conf.firebaseAppId,
  measurementId: conf.measurementId,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

//function to customise the error message
function formatErrorMessage(errorString) {
  // Remove "auth/" from the string
  errorString = errorString.replace("auth/", "");

  // Replace "-" with a space
  errorString = errorString.replace(/-/g, " ");

  // Capitalize the first letter of each word
  errorString = errorString.replace(/\b\w/g, (char) => {
    return char.toUpperCase();
  });
  return errorString;
}

class AuthService {
  constructor() {
    this.auth = auth;
  }

  async createUser(email, password) {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      const response = userCredential.user;
      const userInfo = {
        uid: response.uid,
        displayName: response.displayName,
        email: response.email,
        emailVerified: response.emailVerified,
        photoURL: response.photoURL,
        createdAt: response.metadata.createdAt,
        lastLoginAt: response.metadata.lastLoginAt,
        lastSignInTime: response.metadata.lastSignInTime,
        creationTime: response.metadata.creationTime,
        providerId: response.providerId,
      };
      return userInfo;
    } catch (error) {
      return formatErrorMessage(error.code);
    }
  }
}

const authService = new AuthService();

export default authService;
