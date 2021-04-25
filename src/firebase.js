import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAUny75EmZ2DxAqatWd87_qrRLLHhy2q1E",
  authDomain: "react-todo-app-8c89e.firebaseapp.com",
  projectId: "react-todo-app-8c89e",
  storageBucket: "react-todo-app-8c89e.appspot.com",
  messagingSenderId: "718652935014",
  appId: "1:718652935014:web:4d9ad7f9e9dbbecca896a7",
  measurementId: "G-TJHXTYCMSD",
});

const db = firebaseApp.firestore();

export default db;
