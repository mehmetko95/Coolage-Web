import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyChXJpHbzNFY5jH-AgpTibSdgpW1Y8-HE4",
    authDomain: "coolage-56e3b.firebaseapp.com",
    databaseURL: "https://coolage-56e3b.firebaseio.com",
    projectId: "coolage-56e3b",
    storageBucket: "coolage-56e3b.appspot.com",
    messagingSenderId: "130040209227",
    appId: "1:130040209227:web:65d5556b4796259e0492ce",
    measurementId: "G-LCJXHZJS0C"
};

var fire = firebase.initializeApp(firebaseConfig);
export default fire;