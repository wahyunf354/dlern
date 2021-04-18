import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const config = {
  apiKey: "AIzaSyBbaVSdq3t2wzQMn8cdG3GDO2nI_Lt9opw",
  authDomain: "d-lern.firebaseapp.com",
  projectId: "d-lern",
  storageBucket: "d-lern.appspot.com",
  messagingSenderId: "61119164659",
  appId: "1:61119164659:web:2099b88cbac9dd77c5c786",
  measurementId: "G-SXWW83LTN5",
};

// firebase.initializeApp(config);

export default !firebase.apps.length
  ? firebase.initializeApp(config)
  : firebase.app();
