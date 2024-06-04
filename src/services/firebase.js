import conf from "../conf/conf.js";
import { initializeApp } from "firebase/app";
import { formatErrorMessage } from "../utils/errorMessages.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";

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

class AuthService {
  constructor() {
    this.auth = auth;
    this.provider = new GoogleAuthProvider();
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
        username: "",
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

  async googleSignin() {
    try {
      const result = await signInWithPopup(this.auth, this.provider);
      const response = result.user;
      const userInfo = {
        uid: response.uid,
        username: "",
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

  async login(email, password){
    try{
      const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
      const response = userCredential.user;
      const userInfo = {
        uid: response.uid,
        username: "",
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
    }catch(error){
      return formatErrorMessage(error.code)
    }
  }

  async resetPassword(email){
    try{
      await sendPasswordResetEmail(this.auth, email)
      return "Password Reset Link Sent"
    }catch(error){
      return formatErrorMessage(error.code)
    }
  }
}

const authService = new AuthService();

export default authService;
