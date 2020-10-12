import * as firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp  ({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: "react-fire-c9db6",
    storageBucket: process.env.REACT_APP_FIREBASE_storageBucket,
    messagingSenderId: process.env.REACT_APP_FIREBASE_messagingSenderId,
    appId: process.env.REACT_APP_FIREBASE_appId,
    measurementId: process.env.REACT_APP_FIREBASE_measurement_idmeasurementId
  });
  
  export function getFirebase(){
      return app;
  }

  export function getFirestore(){
    return firebase.firestore(app);
  }

  
