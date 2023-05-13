// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  signInWithPopup,
  signInWithRedirect,
  getAuth,
  GoogleAuthProvider,
} from 'firebase/auth';

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
const provider = new GoogleAuthProvider(firebaseApp);
provider.getCustomParameters({
  modal: 'account_acces',
});
export const auth = getAuth();
export const signInWithPopupGoogle = () => signInWithPopup(auth, provider);
