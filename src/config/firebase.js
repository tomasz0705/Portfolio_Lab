import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAiIpmcN3JuJbYgFhYkNuZc5SJFFWerrhM",
  authDomain: "portfoliolab-451bb.firebaseapp.com",
  databaseURL:"https://portfoliolab-451bb-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "portfoliolab-451bb",
  storageBucket: "portfoliolab-451bb.appspot.com",
  messagingSenderId: "479512324300",
  appId: "1:479512324300:web:0921e760efd3045aae7a69",
  measurementId: "G-GBBQYRJQZZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };