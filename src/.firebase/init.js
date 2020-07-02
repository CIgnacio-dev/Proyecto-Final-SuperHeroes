import firebase from 'firebase'
import firestore from 'firebase/firestore'

  const firebaseConfig = {
    apiKey: "AIzaSyCfXQcmE5ZOFQL3UNlA6dwYRFWG9SnI1P8",
    authDomain: "superheroebattle-b1245.firebaseapp.com",
    databaseURL: "https://superheroebattle-b1245.firebaseio.com",
    projectId: "superheroebattle-b1245",
    storageBucket: "superheroebattle-b1245.appspot.com",
    messagingSenderId: "66738957126",
    appId: "1:66738957126:web:17856c06cbffc21fb91347"
  };
  
  const firebaseApp= firebase.initializeApp(firebaseConfig);
  firebaseApp.firestore().settings({timestampsInSnapshots: true})

  export default firebaseApp.firestore