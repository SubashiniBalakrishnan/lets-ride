import * as firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBWALzqHf23-F2G1o42iQdsIc_P1hKOimU",
  authDomain: "e-ride-38ad1.firebaseapp.com",
  projectId: "e-ride-38ad1",
  storageBucket: "e-ride-38ad1.appspot.com",
  messagingSenderId: "131383339205",
  appId: "1:131383339205:web:8a423343876581d813a8ac"
};
 
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
