import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAa54cv-BQAfsYtN12zmQRJUUMW6vSXLg0",
    authDomain: "forja-vacunacion.firebaseapp.com",
    projectId: "forja-vacunacion",
    storageBucket: "forja-vacunacion.appspot.com",
    messagingSenderId: "529505630315",
    appId: "1:529505630315:web:c9d618855f2a44b8c2992e"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);
  export const db = fb.firestore();