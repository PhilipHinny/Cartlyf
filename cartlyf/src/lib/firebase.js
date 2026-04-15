import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAND6saRpu9w-uWg89Gai_bIYYF021ntss",
  authDomain: "cartlyf-technologies.firebaseapp.com",
  projectId: "cartlyf-technologies",
  storageBucket: "cartlyf-technologies.firebasestorage.app",
  messagingSenderId: "720070110373",
  appId: "1:720070110373:web:f82207e07929707ceef14c",
  measurementId: "G-5R5JEBKYBJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

export { app, analytics };
