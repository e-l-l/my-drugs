// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQ9uGTi4pkfHAzkvFztRrbQZJYWLqXFN0",
  authDomain: "my-drugs-4d516.firebaseapp.com",
  projectId: "my-drugs-4d516",
  storageBucket: "my-drugs-4d516.appspot.com",
  messagingSenderId: "816153326983",
  appId: "1:816153326983:web:3204001684eb11a19bcf22",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth };
export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      localStorage.setItem("name", name);
    })
    .catch((error) => {
      console.log(error);
    });
};
