// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
// apiKey: "AIzaSyBxkmVIIoF-DBSGCGSQimPkqkXtwxwIDfI",
// authDomain: "the-chef-recipe-d5d3e.firebaseapp.com",
// projectId: "the-chef-recipe-d5d3e",
// storageBucket: "the-chef-recipe-d5d3e.appspot.com",
// messagingSenderId: "107873402390",
// appId: "1:107873402390:web:76cb3dfd5762988eb3ff37"