import firebase from "firebase";

const config = {
  apiKey: "AIzaSyCEKyNLpUNChRUpiTJ_wONc2h2d8msgttE",
  authDomain: "project-libra-twitter.firebaseapp.com",
  databaseURL: "https://project-libra-twitter.firebaseio.com",
  projectId: "project-libra-twitter",
  storageBucket: "project-libra-twitter.appspot.com",
  messagingSenderId: "1007178103926",
  appId: "1:1007178103926:web:002f246b6bf9e737ccb357",
  measurementId: "G-4VHQ58P8YB",
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.firestore();
console.log(db);

export default db;
