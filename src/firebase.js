import firebase from "firebase"

var firebaseConfig = {
  apiKey: "AIzaSyCcnpGBpIXrwbcnZpS6NpBVYRojGZhPDkA",
  authDomain: "react--clone-bf8c1.firebaseapp.com",
  databaseURL: "https://react--clone-bf8c1.firebaseio.com",
  projectId: "react--clone-bf8c1",
  storageBucket: "react--clone-bf8c1.appspot.com",
  messagingSenderId: "1008330579824",
  appId: "1:1008330579824:web:8cc5dab792ebf191eb39b5",
  measurementId: "G-7DLQFE71N0",
};

const firebasseApp = firebase.initializeApp(firebaseConfig)
const db = firebasseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {auth, provider}
export default db