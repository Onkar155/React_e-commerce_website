import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDLymz7r4rCsoSW-Mv85m-OMJ2ozbzZN14",
  authDomain: "fir-authentication-c9ec5.firebaseapp.com",
  projectId: "fir-authentication-c9ec5",
  storageBucket: "fir-authentication-c9ec5.appspot.com",
  messagingSenderId: "924687498186",
  appId: "1:924687498186:web:af84dd85acd88022922d33",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
