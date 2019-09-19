import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyBJv6hhP9hkstdYMDMiXV9pA1tL5eiPe18",
    authDomain: "shopping-1877b.firebaseapp.com",
    databaseURL: "https://shopping-1877b.firebaseio.com",
    projectId: "shopping-1877b",
    storageBucket: "",
    messagingSenderId: "781896138160",
    appId: "1:781896138160:web:6f3ab37b345d7e6d"
  };


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();


  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);


  export default firebase;
