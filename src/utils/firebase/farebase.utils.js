import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword, signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCVzNEHpFBa8D9Soebe-8KLtoJsQg2z76c",
  authDomain: "crown-clothing-db-75620.firebaseapp.com",
  projectId: "crown-clothing-db-75620",
  storageBucket: "crown-clothing-db-75620.appspot.com",
  messagingSenderId: "473005910528",
  appId: "1:473005910528:web:d207f9d7eb673b0c3786e5",
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
        ...additionalInformation,
      })
    } catch (error) {
      console.log('error creating the user', error.message)
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;


  return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;


  return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = () => signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);