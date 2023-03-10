import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD4H8GT5oEENQU1I6tV7cOmVxJyLOO4uOY",
    authDomain: "fooddeliveryapp-d505b.firebaseapp.com",
    projectId: "fooddeliveryapp-d505b",
    storageBucket: "fooddeliveryapp-d505b.appspot.com",
    messagingSenderId: "29419337089",
    appId: "1:29419337089:web:f4ff454937df56586fe480",
    measurementId: "G-8KZMG14PNJ"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export { firebase }