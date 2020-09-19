import * as firebase from 'firebase/app';
import firestore from 'firebase/firestore'


const config = {
    apiKey: "AIzaSyDkl4YNlpS3y_AQW1tr3uwdvrufi03lKKA",
    authDomain: "setl-73f24.firebaseapp.com",
    databaseURL: "https://setl-73f24.firebaseio.com",
    projectId: "setl-73f24",
    storageBucket: "setl-73f24.appspot.com",
    messagingSenderId: "549077118388",
    appId: "1:549077118388:web:d9651b43bf99bc71a5d6e1"
};
firebase.initializeApp(config);

firebase.firestore().settings({});

export default firebase;