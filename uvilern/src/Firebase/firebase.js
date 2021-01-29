import firebase from 'firebase'
import 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyD7sx4e5ppbIQkdBRr6IDuUhzqKZ_Ww6jQ",
    authDomain: "uvilern.firebaseapp.com",
    projectId: "uvilern",
    storageBucket: "uvilern.appspot.com",
    messagingSenderId: "408101628441",
    appId: "1:408101628441:web:21697bae344425d6679888",
    measurementId: "G-1Y9M1L2XXW"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth()
//const db = firebaseApp.firestore();
//const provider = new firebase.auth.GoogleAuthProvider();

export { auth };
export default db;