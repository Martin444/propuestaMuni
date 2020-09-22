import * as firebase from 'firebase/app';
import 'firebase/firestore';


const config = {
    apiKey: "AIzaSyCAlbhdc3xTay2vjGJcHBKUkB7qxa2QvOU",
    authDomain: "municipalidad-b7cfe.firebaseapp.com",
    databaseURL: "https://municipalidad-b7cfe.firebaseio.com",
    projectId: "municipalidad-b7cfe",
    storageBucket: "municipalidad-b7cfe.appspot.com",
    messagingSenderId: "655537131987",
    appId: "1:655537131987:web:cea9bc1c224db4a1e81f26",
    measurementId: "G-6TEHXPMHVM"
};
firebase.initializeApp(config);

firebase.firestore().settings({});

export default firebase;