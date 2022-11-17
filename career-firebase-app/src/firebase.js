import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCMCzRekS2KaCINkq9-NoVYzra9z4Tb3LM",
    authDomain: "tinder-firebase-hashout.firebaseapp.com",
    projectId: "tinder-firebase-hashout",
    storageBucket: "tinder-firebase-hashout.appspot.com",
    messagingSenderId: "504248710713",
    appId: "1:504248710713:web:a86184fd396c26f8c1bfe8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { auth, db }