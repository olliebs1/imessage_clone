import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBJWB5z1rIFZjLKKbTvyCSDLeTKo6N7R4c",
    authDomain: "imessage-clone-366a8.firebaseapp.com",
    databaseURL: "https://imessage-clone-366a8.firebaseio.com",
    projectId: "imessage-clone-366a8",
    storageBucket: "imessage-clone-366a8.appspot.com",
    messagingSenderId: "475950055644",
    appId: "1:475950055644:web:73e35ac2f838c5b2c77419",
    measurementId: "G-W8N52HRCWF"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GithubAuthProvider();

  export {auth, provider};
  export default db;
