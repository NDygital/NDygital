// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.17.0/firebase-firestore.js";

// Konfigurasi Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCHon-0KwtsNdK4M7P6Hiu0pH7QDV0pgOA",
  authDomain: "ndygital-rsvp.firebaseapp.com",
  projectId: "ndygital-rsvp",
  storageBucket: "ndygital-rsvp.firebasestorage.app",
  messagingSenderId: "672063432417",
  appId: "1:672063432417:web:161405573483e08f9e39a0"
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);

// Firestore Database
const db = getFirestore(app);

export { db };