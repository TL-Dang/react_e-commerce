//Belows is from the firebase library. Connects firebase to web app. Benefit of putting all firebase utilities on one page is for easier updating when Firebase changes how any the of the utilitys functions.

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  getDocs,
  setDoc,
  collection,
  writeBatch,
  query,
} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB7P7E3h890_8IXZsLfdBqVabXKYnWOVzQ',
  authDomain: 'react-e-commerce-db-6459d.firebaseapp.com',
  projectId: 'react-e-commerce-db-6459d',
  storageBucket: 'react-e-commerce-db-6459d.appspot.com',
  messagingSenderId: '748667325050',
  appId: '1:748667325050:web:6789d3d2be39ac86ea49c3',
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

//Changed 'app' to 'firebaseapp' for better reading/less confusion w/ app.js
const firebaseApp = initializeApp(firebaseConfig);

//Class provided by Google Auth
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = function () {
  return signInWithPopup(auth, googleProvider);
};
export const signInWithGoogleRedirect = function () {
  return signInWithRedirect(auth, googleProvider);
};
export const db = getFirestore();

export const addCollectionAndDocuments = async function (
  collectionKey,
  objectsToAdd,
  field
) {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log('done');
};

export const getCategoriesAndDocuments = async function () {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
};

// uid, userSnapShot comes from the reference object in the console.log
export const createUserDocumentFromAuth = async function (
  userAuth,
  additionalInfo = {}
) {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);
  // console.log(userSnapshot);
  // console.log(userSnapshot.exists());

  //If userSnapshot does not exist
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  //If userSnapshot exits
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async function (
  email,
  password
) {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailandPassword = async function (
  email,
  password
) {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async function () {
  await signOut(auth);
};

export const onAuthStateChangedListener = function (callback) {
  return onAuthStateChanged(auth, callback);
};
