import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyD6GEanEX-_32r4p5n_cTs0Bmt6xbjDq6k",
  authDomain: "bank-account-manager-1f9bf.firebaseapp.com",
  databaseURL: "https://bank-account-manager-1f9bf.firebaseio.com",
  projectId: "bank-account-manager-1f9bf",
  storageBucket: "bank-account-manager-1f9bf.appspot.com",
  messagingSenderId: "377341853667",
  appId: "1:377341853667:web:1e7e0d648cb0dce439aad6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase