import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc, snapshotEqual } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCVzNEHpFBa8D9Soebe-8KLtoJsQg2z76c",
  authDomain: "crown-clothing-db-75620.firebaseapp.com",
  projectId: "crown-clothing-db-75620",
  storageBucket: "crown-clothing-db-75620.appspot.com",
  messagingSenderId: "473005910528",
  appId: "1:473005910528:web:d207f9d7eb673b0c3786e5",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);

  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt
      })
    } catch (error) {
      console.log('error creating the user', error.message)
    }
  }

  return userDocRef;
};
