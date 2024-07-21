// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyB5Hb-YenU7-2XZvBQQ5zbWdEVmmyb7i2k",
	authDomain: "e-shop-f9941.firebaseapp.com",
	projectId: "e-shop-f9941",
	storageBucket: "e-shop-f9941.appspot.com",
	messagingSenderId: "146576512097",
	appId: "1:146576512097:web:5d06cd55e333f27198c620",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
