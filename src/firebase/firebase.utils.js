import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyA-zjGfYGhKDMlIXh1y2T1rLTVo5OVTUi0',
  authDomain: 'crwn-db-20e68.firebaseapp.com',
  databaseURL: 'https://crwn-db-20e68.firebaseio.com',
  projectId: 'crwn-db-20e68',
  storageBucket: 'crwn-db-20e68.appspot.com',
  messagingSenderId: '146639930258',
  appId: '1:146639930258:web:b228eca894ea26ff0d374b',
  measurementId: 'G-0Z86X6H5JJ',
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfile = async (userAuth, otherProps) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const userSnapShot = await userRef.get();
  if (!userSnapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      userRef.set({
        displayName,
        email,
        createdAt,
        ...otherProps,
      });
    } catch (error) {
      console.error(`Error Creating User`, error);
    }
  }
  return userRef;
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
