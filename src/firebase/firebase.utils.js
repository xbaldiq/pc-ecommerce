import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDzvksdKC6ivuHSDxgziaN7AoqrMwbu3-w',
  authDomain: 'pc-building-react.firebaseapp.com',
  databaseURL: 'https://pc-building-react.firebaseio.com',
  projectId: 'pc-building-react',
  storageBucket: 'pc-building-react.appspot.com',
  messagingSenderId: '1014195272929',
  appId: '1:1014195272929:web:37af8ad4e671aa496f0ba0',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  // only fired when user signIn (userAuth is exist) or else quit
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  console.log('userRef', userRef);
  const snapShot = await userRef.get();
  console.log('snapShot', snapShot);

  // if data exist
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
