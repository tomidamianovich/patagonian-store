import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';

const config = {
  apiKey: "AIzaSyBLjhorTnANX-KQgIIRVtb_1GjuXEJ3Xzg",
  authDomain: "patagonianstore-859f4.firebaseapp.com",
  projectId: "patagonianstore-859f4", 
  storageBucket: "patagonianstore-859f4.appspot.com",
  messagingSenderId: "386105458197",
  appId: "1:386105458197:web:e129822c98a291bf02181c"
};

firebase.initializeApp(config)
const db = firebase.database();
const  storage = firebase.storage();

export { 
  db,
  storage
}