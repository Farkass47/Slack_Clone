import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyBAQJB-g_ccOrIKsNJi3Zr-5Ysv93PIYs8",
  authDomain: "react-slack-clone-dae55.firebaseapp.com",
  databaseURL: "https://react-slack-clone-dae55.firebaseio.com",
  projectId: "react-slack-clone-dae55",
  storageBucket: "react-slack-clone-dae55.appspot.com",
  messagingSenderId: "135777085513",
  appId: "1:135777085513:web:ee5ec9ccbb024c036a7798"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

export default firebase;