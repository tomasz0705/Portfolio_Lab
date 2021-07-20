import * as firebase from 'firebase';
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAiIpmcN3JuJbYgFhYkNuZc5SJFFWerrhM",
    authDomain: "portfoliolab-451bb.firebaseapp.com",
    databaseURL: "https://portfoliolab-451bb-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "portfoliolab-451bb",
    storageBucket: "portfoliolab-451bb.appspot.com",
    messagingSenderId: "479512324300",
    appId: "1:479512324300:web:0921e760efd3045aae7a69",
    measurementId: "G-GBBQYRJQZZ"
  };

  firebase.initializeApp(firebaseConfig);