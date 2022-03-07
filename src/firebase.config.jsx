import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
firebase.initializeApp({
   
    apiKey: "AIzaSyAM99LDLXNDa_Y0kTcV7mtNDfkXqU_M-QY",
    authDomain: "react-firebase-auth-b90e9.firebaseapp.com",
    projectId: "react-firebase-auth-b90e9",
});
var db = firebase.firestore();
export default db;