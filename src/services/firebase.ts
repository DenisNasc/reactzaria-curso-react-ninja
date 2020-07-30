import 'firebase/auth';
import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyAyoUhFwIGbp5c6i06qpL2pAYMXR3AdzEw',
  authDomain: 'reactzzaria-e3f1a.firebaseapp.com',
  databaseURL: 'https://reactzzaria-e3f1a.firebaseio.com',
  projectId: 'reactzzaria-e3f1a',
  storageBucket: 'reactzzaria-e3f1a.appspot.com',
  messagingSenderId: '394958591708',
  appId: '1:394958591708:web:8496f25bf6254dd1c28619',
  measurementId: 'G-YJMTD92V2L',
};

firebase.initializeApp(firebaseConfig);

export const {auth, database} = firebase;

export default firebase;
