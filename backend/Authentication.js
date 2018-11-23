import firebase from "firebase";
// Initialize Firebase
// TODO: Replace with your project's customized code snippet

var firebase = require("firebase");

var config = {
    apiKey: "AIzaSyCWM-I_DIDeaPsgT9J-Au642IXIgrXFLfg",
    authDomain: "project-oswa.firebaseapp.com",
    databaseURL: "https://project-oswa.firebaseio.com",
    projectId: "project-oswa",
    storageBucket: "project-oswa.appspot.com",
    messagingSenderId: "310719142567"
  };

var oswaApp = firebase.initializeApp(config);

console.log(oswaApp.name); 



// You can retrieve services via the defaultApp variable...
var defaultStorage = oswaApp.storage();
var defaultDatabase = oswaApp.database();

// ... or you can use the equivalent shorthand notation
defaultStorage = firebase.storage();
defaultDatabase = firebase.database();


firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});

firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});

firebase.auth().signOut().then(function() {
  // Sign-out successful.
}).catch(function(error) {
  // An error happened.
});
