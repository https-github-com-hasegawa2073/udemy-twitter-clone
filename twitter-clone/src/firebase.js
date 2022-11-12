import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1D48rVemXv24nUX_QjjUIoc3oCg6ZAQw",
  authDomain: "twitter-clone-udemy-b0f46.firebaseapp.com",
  projectId: "twitter-clone-udemy-b0f46",
  storageBucket: "twitter-clone-udemy-b0f46.appspot.com",
  messagingSenderId: "934623556821",
  appId: "1:934623556821:web:930f7bf8c0525932165e5c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export default db;
