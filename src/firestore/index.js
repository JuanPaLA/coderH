import * as firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp  ({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "react-fire-c9db6.firebaseapp.com",
    databaseURL: "https://react-fire-c9db6.firebaseio.com",
    projectId: "react-fire-c9db6",
    storageBucket: "react-fire-c9db6.appspot.com",
    messagingSenderId: "1034971015193",
    appId: "1:1034971015193:web:a372a57581b45322aea288",
    measurementId: "G-GJX4V9BFN4"
  });
  
  export function getFirebase(){
      return app;
  }

  export function getFirestore(){
    return firebase.firestore(app);
  }

  
