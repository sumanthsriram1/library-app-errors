//npm i @firebase/firestore
import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';


//sdk
const firebaseConfig = {
    apiKey: "AIzaSyCXEy6VX67vOgVJUSAmhFTIGDVxlXD9gVM",
    authDomain: "library-app-c9b70.firebaseapp.com",
    projectId: "library-app-c9b70",
    storageBucket: "library-app-c9b70.appspot.com",
    messagingSenderId: "932487248490",
    appId: "1:932487248490:web:fa0afb94a20d48acc2a813"
  };

//initialize firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app);

export default db;