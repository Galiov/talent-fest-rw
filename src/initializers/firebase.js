  import firebase from 'firebase';

  const firebaseConfig = {
    apiKey: "AIzaSyAZVQ3R4aAFzKhUZqucbCHgoNwtTJJEKyA",
    authDomain: "rulesw-prueba-react.firebaseapp.com",
    databaseURL: "https://rulesw-prueba-react.firebaseio.com",
    projectId: "rulesw-prueba-react",
    storageBucket: "",
    messagingSenderId: "623726240904",
    appId: "1:623726240904:web:054f02f373ee3ece"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;