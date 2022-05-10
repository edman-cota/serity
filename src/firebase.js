/* eslint-disable no-empty */
/* eslint-disable no-restricted-exports */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-var */
/* eslint-disable import/no-mutable-exports */
import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBwpJJZ8Gt0DO0kvL5FujtZaI85iB-oNnQ",
  authDomain: "buxuptechnology.firebaseapp.com",
  databaseURL: "https://buxuptechnology-default-rtdb.firebaseio.com",
  projectId: "buxuptechnology",
  storageBucket: "buxuptechnology.appspot.com",
  messagingSenderId: "755792078362",
  appId: "1:755792078362:web:76669ae66299779dfb93a3",
  measurementId: "G-8N11Y2SCW9",
};
const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const db = app.firestore();
var database = firebase.database();
const storage = firebase.storage();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await auth.signInWithPopup(googleProvider);
    const user = res.user;
    const query = await db
      .collection("users")
      .where("uid", "==", user.uid)
      .get();
    if (query.docs.length === 0) {
      await db.collection("users").add({
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {}
};
const signInWithEmailAndPassword = async (email, password) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
  } catch (err) {}
};
const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await auth.createUserWithEmailAndPassword(email, password);
    const user = res.user;
    await db.collection("users").add({
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {}
};
const sendPasswordResetEmail = async (email) => {
  try {
    await auth.sendPasswordResetEmail(email);
  } catch (err) {}
};
const logout = () => {
  auth.signOut();
};

export {
  auth,
  db,
  storage,
  database as default,
  signInWithGoogle,
  signInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordResetEmail,
  logout,
};
