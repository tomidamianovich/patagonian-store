import firebase from 'firebase'

const config = {
  // DO NOT USE THESE CREDENTIALS ! THEY ARE HERE TO HELP IN THE LEARNING PROCESS.
  // ANY AND ALL DATA ON THAT DOMAIN IS SUBJECT TO CHANGE AND REMOVAL AT ANY TIME
  // THIS ACCOUNT IS ALSO ON THE FREE PLAN AND IS SUBJECT TO RESTRICTIONS !
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
var auth = firebase.auth();

export { 
  db,
  storage,
  auth
}