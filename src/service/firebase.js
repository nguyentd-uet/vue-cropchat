import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDohC4Icrg88g7kDbunJEXjrfc2VwOfb38",
    authDomain: "cropchat-e5bef.firebaseapp.com",
    databaseURL: "https://cropchat-e5bef.firebaseio.com",
    projectId: "cropchat-e5bef",
    storageBucket: "cropchat-e5bef.appspot.com",
    messagingSenderId: "952696694764"
  };
firebase.initializeApp(config);

export default {
 database: firebase.database()
}