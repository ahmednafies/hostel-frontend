import firebase from "firebase";
const settings = { timestampsInSnapshots: true };
const firebaseConfig = {
  apiKey: "AIzaSyAjjuOzY37rmGkO-NxsxWDZEwfDtgrO7Mg",
  authDomain: "port-hostel.firebaseapp.com",
  databaseURL: "https://port-hostel.firebaseio.com",
  projectId: "port-hostel",
  storageBucket: "port-hostel.appspot.com",
  messagingSenderId: "379551629738",
  appId: "1:379551629738:web:6247847f77627dbf"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings(settings);
export default firebase;
