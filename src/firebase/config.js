import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD9OReu2M1ue76iEnTRVq9L8ICKw_JeAqA",
    authDomain: "traversy-ninja-firegram.firebaseapp.com",
    projectId: "traversy-ninja-firegram",
    storageBucket: "traversy-ninja-firegram.appspot.com",
    messagingSenderId: "720467036980",
    appId: "1:720467036980:web:184effb6a1cf7c100af361"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };