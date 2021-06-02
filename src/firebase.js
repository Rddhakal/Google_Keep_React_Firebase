import firebase from 'firebase'

const app = firebase.initializeApp({
    // add your firebase project CDN code
})

const db = firebase.firestore()
export default db