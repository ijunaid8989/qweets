import firebase from "firebase/app"
import "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyBHMxkFAX2IDrpckDc-gDXU4yfVQtCAAfM",
  authDomain: "qweeter-eb0db.firebaseapp.com",
  projectId: "qweeter-eb0db",
  storageBucket: "qweeter-eb0db.appspot.com",
  messagingSenderId: "54151693968",
  appId: "1:54151693968:web:a483540ad6f168c19dba15",
  measurementId: "G-2MK6JMDM0G"
}

firebase.initializeApp(firebaseConfig)

let db = firebase.firestore()

export default db
