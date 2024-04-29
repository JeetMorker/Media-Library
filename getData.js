// Import the functions you need from the SDKs you need
import { collection, getDocs, doc, getDoc, getFirestore } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js";
        import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
        import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-analytics.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYGFqE19eQg0rn-MurpJ6OT7JBUii2OzM",
  authDomain: "media-670bb.firebaseapp.com",
  projectId: "media-670bb",
  storageBucket: "media-670bb.appspot.com",
  messagingSenderId: "784706745218",
  appId: "1:784706745218:web:b493af2604a4ca38f6159b",
  measurementId: "G-6G1VW669BZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 import{getDatabase,ref,child,get,set,update,remove} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-database.js";
 const db = getFirestore(app);



const docRef = doc(db,"comments/movies/");
const docSnap = await getDoc(docRef);
console.log("Document data:", docSnap.data());




