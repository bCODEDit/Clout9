import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAc3SWFbMKiXl7UfUrl8__ztw55i8NuKd4",
  authDomain: "clout9-2025e.firebaseapp.com",
  projectId: "clout9-2025e",
  storageBucket: "clout9-2025e.appspot.com",
  messagingSenderId: "11241601240",
  appId: "1:11241601240:web:d52e6895f890aad2bd3fad",
  measurementId: "G-FRKYM8J6VF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);