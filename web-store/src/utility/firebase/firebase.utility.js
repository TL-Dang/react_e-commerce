//Belows is from the firebase library. Connects firebase to web app

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

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
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = function () {
  return signInWithGooglePopup(auth, provider);
};
