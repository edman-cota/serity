/* eslint-disable no-empty */
/* eslint-disable no-restricted-exports */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-var */
/* eslint-disable import/no-mutable-exports */
import firebase from 'firebase'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_DATABASE_URL,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGE_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
}
const app = firebase.initializeApp(firebaseConfig)
const auth = app.auth()
const db = app.firestore()
var database = firebase.database()
const storage = firebase.storage()
const googleProvider = new firebase.auth.GoogleAuthProvider()
const signInWithGoogle = async () => {
  try {
    const res = await auth.signInWithPopup(googleProvider)
    const user = res.user
    const query = await db.collection('users').where('uid', '==', user?.uid).get()
    if (query.docs.length === 0) {
      await db.collection('users').add({
        uid: user?.uid,
        name: user?.displayName,
        authProvider: 'google',
        email: user?.email,
      })
    }
  } catch (err) {}
}
const signInWithEmailAndPassword = async (email: string, password: string) => {
  try {
    await auth.signInWithEmailAndPassword(email, password)
  } catch (err) {}
}
const registerWithEmailAndPassword = async (name: string, email: string, password: string) => {
  try {
    const res = await auth.createUserWithEmailAndPassword(email, password)
    const user = res.user
    await db.collection('users').add({
      uid: user?.uid,
      name,
      authProvider: 'local',
      email,
    })
  } catch (err) {}
}
const sendPasswordResetEmail = async (email: string) => {
  try {
    await auth.sendPasswordResetEmail(email)
  } catch (err) {}
}
const logout = () => {
  auth.signOut()
}

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
}
