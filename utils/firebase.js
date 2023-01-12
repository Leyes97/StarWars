import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB02IuSDQ3A8LFWw152m3K3EbSvV5sPeTI",
    authDomain: "starwarsappi.firebaseapp.com",
    projectId: "starwarsappi",
    storageBucket: "starwarsappi.appspot.com",
    messagingSenderId: "843072435600",
    appId: "1:843072435600:web:1b258c0452738d2af8af15",
    measurementId: "G-LGQH0E7RM6"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firestore DB
const db = getFirestore(app);

// Initialize Firebase Authentication
export const auth = getAuth(app);

export default db;
