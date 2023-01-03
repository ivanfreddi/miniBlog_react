import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAFuyL0LcumGSXdodC4GUhRbAnkY2S_u0g",
  authDomain: "miniblog-fe114.firebaseapp.com",
  projectId: "miniblog-fe114",
  storageBucket: "miniblog-fe114.appspot.com",
  messagingSenderId: "983997546828",
  appId: "1:983997546828:web:cdfb328d6664b20e8d0fe9"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};