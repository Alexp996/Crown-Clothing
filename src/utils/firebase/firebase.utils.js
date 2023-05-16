// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  signInWithPopup,
  getAuth,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from 'firebase/auth';

import {
  getFirestore,
  doc, //for get a document instance
  getDoc, //acces the data from documents
  setDoc, // for setting the data from  documents
} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB1pEsjGLNcrjesA_qcsxpwFBJn-dzI_5A',
  authDomain: 'crown-clothing-database-dfb21.firebaseapp.com',
  projectId: 'crown-clothing-database-dfb21',
  storageBucket: 'crown-clothing-database-dfb21.appspot.com',
  messagingSenderId: '813102787468',
  appId: '1:813102787468:web:21893e8829792fac1584a9',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider(firebaseApp);
googleProvider.getCustomParameters({
  modal: 'select_account',
});

export const auth = getAuth();
export const signInWithPopupGoogle = () =>
  signInWithPopup(auth, googleProvider);

/** make the db config */
export const db = getFirestore();

/** create user document reference in our Firestore database */
export const createUserDocumentFromAuth = async (
  userAuth,
  aditionalInformation = {}
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, 'users', userAuth.uid); //three arguments = 1.database, 2.collections, 3.unique ID (UID)
  const userSnapshot = await getDoc(userDocRef);

  //if the userSnapshot.exists() = false, then evaluate this statement to true and create the user
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...aditionalInformation,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
