import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth/web-extension';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
const firebaseConfig = {
  apiKey: 'AIzaSyAilu2pC59GpwyWULvSpgoTLKtroui0JxE',
  authDomain: 'ajilda-cosmetics.firebaseapp.com',
  projectId: 'ajilda-cosmetics',
  storageBucket: 'ajilda-cosmetics.appspot.com',
  messagingSenderId: '216188587161',
  appId: '1:216188587161:web:58ff924820280e4d207c08',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storageBucket = getStorage(app);
