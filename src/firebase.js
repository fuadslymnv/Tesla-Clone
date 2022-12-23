import { initializeApp } from "firebase/app";

import {getAuth} from "firebase/auth"
// const {
//     REACT_APP_FIREBASE_API_KEY,
//     REACT_APP_AUTH_DOMAIN,
//     REACT_APP_DATABASE_URL,
//     REACT_APP_PROJECT_ID,
//     REACT_APP_STORAGE_BUCKET,
//     REACT_APP_MESSAGING_SENDER_ID,
//     REACT_APP_APP_ID,
//     REACT_APP_MEASUREMENT_ID,
// } = process.env;

export const firebaseConfig = {
    apiKey: "AIzaSyA3JdsQDPDdjvThJ76Vh6hFUnY7AamaM4w",
    authDomain: "tesla-clone-bccb7.firebaseapp.com",
    projectId: "tesla-clone-bccb7",
    storageBucket: "tesla-clone-bccb7.appspot.com",
    messagingSenderId: "427773162775",
    appId: "1:427773162775:web:b78168215b057db781b352"
};

const app = initializeApp(firebaseConfig);

export const auth=getAuth(app);