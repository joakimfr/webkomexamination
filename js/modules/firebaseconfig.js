// I denna modulen ville jag bara ha med allt som har att göra med anslutningen till
// firebase och för att sätta upp min databas.

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, query, where,
   doc } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";

    const firebaseConfig = {
      apiKey: "AIzaSyCqJLTe5t6x7eCxOMEJBvhtXKtcE7MBddE",
        authDomain: "slutexamination.firebaseapp.com",
        projectId: "slutexamination",
        storageBucket: "slutexamination.appspot.com",
        messagingSenderId: "938133695028",
        appId: "1:938133695028:web:abce12c0f93b15303fb861"
    };

   
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, getDocs, deleteDoc, query, where, doc}