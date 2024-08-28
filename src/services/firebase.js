import conf from "../conf/conf.js";
import { initializeApp } from "firebase/app";
import { formatErrorMessage } from "../utils/errorMessages.js";
import { debounce } from "../utils/debounce.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  sendEmailVerification,
  onAuthStateChanged,
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

const SESSION_EXPIRY_DAYS = 20;

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
      const userInfo = this.getUserInfo(userCredential.user);
      this.saveUserSession(userInfo);
      return userInfo;
    } catch (error) {
      return formatErrorMessage(error.code);
    }
  }

  async googleSignin() {
    try {
      const userCredential = await signInWithPopup(this.auth, this.provider);
      const userInfo = this.getUserInfo(userCredential.user);
      this.saveUserSession(userInfo);
      return userInfo;
    } catch (error) {
      return formatErrorMessage(error.code);
    }
  }

  async login(email, password) {
    try {
      const userCredential = await signInWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      const userInfo = this.getUserInfo(userCredential.user);
      this.saveUserSession(userInfo);
      return userInfo;
    } catch (error) {
      
      return formatErrorMessage(error.code);
    }
  }

  getUserInfo(user) {
    if (!user) return null;

    return {
      uid: user.uid,
      displayName: user.displayName,
      email: user.email,
      emailVerified: user.emailVerified,
      photoURL: user.photoURL,
      createdAt: user.metadata.createdAt,
      lastLoginAt: user.metadata.lastLoginAt,
      lastSignInTime: user.metadata.lastSignInTime,
      creationTime: user.metadata.creationTime,
      providerId: user.providerId,
    };
  }

  
  saveUserSession(userInfo) {
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + SESSION_EXPIRY_DAYS);

    localStorage.setItem('user', JSON.stringify({
      user: userInfo,
      expiryDate: expiryDate.getTime()
    }));
  }

  saveAwsSession(awsResponse) {
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + SESSION_EXPIRY_DAYS);

    localStorage.setItem('aws', JSON.stringify({
      user: awsResponse,
      expiryDate: expiryDate.getTime()
    }));
  }

  getCurrentUser() {
    const userJson = localStorage.getItem('user');
    if (!userJson) return null;

    const userData = JSON.parse(userJson);
    if (new Date().getTime() > userData.expiryDate) {
      this.clearUserSession();
      return null;
    }

    return userData.user;
  }

  getAwsUser() {
    const userJson = localStorage.getItem('aws');
    if (!userJson) return null;

    const userData = JSON.parse(userJson);
    if (new Date().getTime() > userData.expiryDate) {
      this.clearUserSession();
      return null;
    }

    return userData.user;
  }

  clearUserSession() {
    localStorage.removeItem('user');
    localStorage.removeItem('aws');
  }

  onAuthStateChanged(callback) {
    return onAuthStateChanged(this.auth, (user) => {
      if (user) {
        user.reload().then(() => {
          callback(user);
        });
      } else {
        callback(null);
      }
    });
  }

  monitorEmailVerification(callback) {
    const debounced = debounce(() => {
      this.onAuthStateChanged((user) => {
        if (user && user.emailVerified) {
          callback();
        } else {
          this.monitorEmailVerification(callback);
        }
      });
    }, 500); // Adjust the delay as needed

    debounced();
  }

  async resetPassword(email) {
    try {
      await sendPasswordResetEmail(this.auth, email);
      return "Password Reset Link Sent";
    } catch (error) {
      return formatErrorMessage(error.code);
    }
  }

  async verifyEmail() {
    try {
      const currentUser = this.auth.currentUser;
      if (currentUser) {
        await sendEmailVerification(currentUser);
        return new Promise((resolve) => {
          resolve("Email Verification Link Sent");
        });
      } else {
        return "No user is currently signed in";
      }
    } catch (error) {
      return formatErrorMessage(error.code);
    }
  }

  logout() {
    try {
      signOut(this.auth);
      this.clearUserSession();
      return "Logged out successfully";
    } catch (error) {
      return "An error occured";
    }
  }
}

const authService = new AuthService();

export default authService;
