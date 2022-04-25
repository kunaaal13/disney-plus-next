// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAszAcD6aYgzCSKvV8_bzyTT7tycWa3Z9s',
  authDomain: 'disney-next-7c757.firebaseapp.com',
  projectId: 'disney-next-7c757',
  storageBucket: 'disney-next-7c757.appspot.com',
  messagingSenderId: '785189700896',
  appId: '1:785189700896:web:1679069e5b2f09e0b7c345',
  measurementId: 'G-YP2WRZ5NVX',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, provider, auth };
