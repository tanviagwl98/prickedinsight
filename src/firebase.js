import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBg6pLBeNFa2A6PzXDFuPmebM4FKxrTxfU",
  authDomain: "prickedinsight.firebaseapp.com",
  projectId: "prickedinsight",
  storageBucket: "prickedinsight.appspot.com",
  messagingSenderId: "55457062339",
  appId: "1:55457062339:web:f2b14f46a50c9412173176",
  measurementId: "G-MSWDDJ0W60"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);