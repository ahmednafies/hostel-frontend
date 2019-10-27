import firebase from "firebase";
const settings = { timestampsInSnapshots: true };
require('dotenv').config();
console.log(process.env)
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings(settings);
export default firebase;
