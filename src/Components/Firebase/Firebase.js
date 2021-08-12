import firebase from "firebase/app";
import 'firebase/auth'

// const app = firebase.initializeApp({
//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_FIREBASE_APP_ID
// })

const app = firebase.initializeApp({
    apiKey: "AIzaSyDp53AB2pmYoJM8debxrxN7oMsVzEdZCYE",
    authDomain: "calculator-development-c4363.firebaseapp.com",
    projectId: "calculator-development-c4363",
    storageBucket: "calculator-development-c4363.appspot.com",
    messagingSenderId: "471827084928",
    appId: "1:471827084928:web:7abb41ac07d6d65dc1d865"
})

export const auth = app.auth()
export default app