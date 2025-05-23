import { addDoc, collection, getDocs, doc, getDoc, getFirestore } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js";        
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
        import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-analytics.js";


const firebaseConfig = {
  apiKey: "AIzaSyCYGFqE19eQg0rn-MurpJ6OT7JBUii2OzM",
  authDomain: "media-670bb.firebaseapp.com",
  projectId: "media-670bb",
  storageBucket: "media-670bb.appspot.com",
  messagingSenderId: "784706745218",
  appId: "1:784706745218:web:b493af2604a4ca38f6159b",
  measurementId: "G-6G1VW669BZ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 const db = getFirestore(app);


export async function getDat() {
const docRef = doc(db,"/comments/movies/500 Days of Summer/1");
const docSnap = await getDoc(docRef);
return docSnap.data();
};

export async function getComments(movieTitle) {

const comments = [] 
const querySnapshot = await getDocs(collection(db, "/comments/movies/".concat(movieTitle)));

querySnapshot.forEach((doc) => {

const data = doc.data();

    comments.push({
      comment: data.comment,
      name: data.username,
      rating: data.rating
    });

});


return comments;
};


export async function saveComment(title, comm,name,rating) {
console.log(comm);
console.log(name);
console.log(rating);
const docRef = await addDoc(collection(db, "/comments/movies/".concat(title)), {
  comment:  comm,
  username: name,
  rating: rating
});

}; 
