import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCqgbDhDCQOom7sOnwMzTkMLumQKxMSLOQ",
  authDomain: "login-3a204.firebaseapp.com",
  projectId: "login-3a204",
  storageBucket: "login-3a204.appspot.com",
  messagingSenderId: "303908581067",
  appId: "1:303908581067:web:3885948c000332e42af54e",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
