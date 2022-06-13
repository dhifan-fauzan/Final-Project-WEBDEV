import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyB7cS9owu9xyylYhPsmAFjdC-8EuDRVhQ8",
  authDomain: "fynance-5fda9.firebaseapp.com",
  databaseURL: "https://fynance-5fda9-default-rtdb.firebaseio.com",
  projectId: "fynance-5fda9",
  storageBucket: "fynance-5fda9.appspot.com",
  messagingSenderId: "920576354464",
  appId: "1:920576354464:web:e3f07561187fbeebcec1c5"
};

const fire = firebase.initializeApp(config);
export default fire;
