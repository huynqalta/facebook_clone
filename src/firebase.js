import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyAVP3UXpLwyfMTqigXjW32Qu5XDinm5pk8",
    authDomain: "clone-facebook-v1.firebaseapp.com",
    projectId: "clone-facebook-v1",
    storageBucket: "clone-facebook-v1.appspot.com",
    messagingSenderId: "636836376606",
    appId: "1:636836376606:web:192cac7b2b640b06053e0f",
    measurementId: "G-DBZKLRXMR0"
});
const auth = firebase.auth();

export { auth };