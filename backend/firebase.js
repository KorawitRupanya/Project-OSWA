import firebase from "firebase";

const config = {
    apiKey: "AIzaSyCWM-I_DIDeaPsgT9J-Au642IXIgrXFLfg",
    authDomain: "project-oswa.firebaseapp.com",
    databaseURL: "https://project-oswa.firebaseio.com",
    projectId: "project-oswa",
    storageBucket: "project-oswa.appspot.com",
    messagingSenderId: "310719142567"
  };

var app =  firebase.initializeApp(config);
const auth = firebase.auth();

var storage = app.storage();
var database = app.database();

export{
    auth,
    storage,
    database
}