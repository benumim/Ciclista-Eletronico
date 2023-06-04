import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  //Cole sua Configuração do Firebase aqui

    apiKey: "AIzaSyBuywEvFtlH1yMMExyp3WM6qoXnkttO26U",
  
    authDomain: "ciclista-eletronico-b148f.firebaseapp.com",
  
    projectId: "ciclista-eletronico-b148f",
  
    storageBucket: "ciclista-eletronico-b148f.appspot.com",
  
    messagingSenderId: "896505011615",
  
    appId: "1:896505011615:web:1228c2aa6559c3a52571aa"
  
  
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
