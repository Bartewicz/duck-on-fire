import firebase from 'firebase'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBL3M0huOfH7W34Rs-quY0aw3h1G2UmqV4",
  authDomain: "duck-on-fire.firebaseapp.com",
  databaseURL: "https://duck-on-fire.firebaseio.com",
  projectId: "duck-on-fire",
  storageBucket: "duck-on-fire.appspot.com",
  messagingSenderId: "141909640449"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const database = firebase.database()
export const googleProvider = new firebase.auth.GoogleAuthProvider()