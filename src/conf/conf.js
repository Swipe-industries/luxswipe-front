const conf = {
    firebaseApiKey: String(import.meta.env.VITE_APP_FIREBASE_API_KEY),
    firebaseAuthDomain: String(import.meta.env.VITE_APP_FIREBASE_AUTH_DOMAIN),
    firebaseProjectID: String(import.meta.env.VITE_APP_FIREBASE_PROJECT_ID),
    firebaseStorageBucket: String(import.meta.env.VITE_APP_FIREBASE_STORAGE_BUCKET),
    firebaseMessagingSenderId: String(import.meta.env.VITE_APP_FIREBASE_MESSAGING_SENDER_ID),
    firebaseAppId: String(import.meta.env.VITE_APP_FIREBASE_APP_ID),
    firebaseMeasurementId: String(import.meta.env.VITE_APP_FIREBASE_MEASUREMENT_ID),
    apiEndpoint: String(import.meta.env.VITE_BACKEND_API_ENDPOINT)
};

export default conf;