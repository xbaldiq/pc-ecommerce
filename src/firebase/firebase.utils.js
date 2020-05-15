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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
