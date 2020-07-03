import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBwVS5PrGpkvl88TFxwFMxKMxnXtUW5Rdc",
    authDomain: "crwn-db-f6b3c.firebaseapp.com",
    databaseURL: "https://crwn-db-f6b3c.firebaseio.com",
    projectId: "crwn-db-f6b3c",
    storageBucket: "crwn-db-f6b3c.appspot.com",
    messagingSenderId: "764240514981",
    appId: "1:764240514981:web:36bad8bf2df2d4df11e24c",
    measurementId: "G-YMPFK5PH4V"
  }

/* using firebase */
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;