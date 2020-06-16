import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firebase-firestore';
import 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyBgt_5u8lcOlhECXgFY7hBMsDDywyf2x7I",
  authDomain: "coolage-81760.firebaseapp.com",
  databaseURL: "https://coolage-81760.firebaseio.com",
  projectId: "coolage-81760",
  storageBucket: "coolage-81760.appspot.com",
  messagingSenderId: "719277734804",
  appId: "1:719277734804:web:de169a731dfeef12a02d81",
  measurementId: "G-D0H3QQGJ8H"
};

class Firebase {
	constructor() {
		app.initializeApp(firebaseConfig)
		//this.auth = app.auth()
    this.db = app.firestore()
    app.analytics();
	}

}

export default new Firebase();