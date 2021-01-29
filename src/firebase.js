import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD_Dw2j0m1BNXTS_1uYqg4vDntYcyVGDOE",
  authDomain: "fir-cc7c3.firebaseapp.com",
  projectId: "fir-cc7c3",
  storageBucket: "fir-cc7c3.appspot.com",
  messagingSenderId: "805461243591",
  appId: "1:805461243591:web:0aca78ec8417a00221f0e2",
  measurementId: "G-J3L5FSXW9K",
};

//connect front end to backend
const firebaseApp = firebase.initializeApp(firebaseConfig);
//in order to get our database from our code
const db = firebaseApp.firestore();
// getting authentication module
const auth = firebase.auth();
//allows us google authentication
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
