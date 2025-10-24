// src/data/firebaseConfig.js

// 1️⃣ Importa solo lo que necesitas
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // si vas a usar Firestore
import { getAuth } from "firebase/auth";           // si vas a usar Auth

// 2️⃣ Configuración de tu proyecto Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBrJnmboWaX5WqCnvkhma5a1pLTasPJhLc",
  authDomain: "miproyectoreact-2eaae.firebaseapp.com",
  projectId: "miproyectoreact-2eaae",
  storageBucket: "miproyectoreact-2eaae.appspot.com",
  messagingSenderId: "311675855555",
  appId: "1:311675855555:web:e245e40cf4c302c0443876"
};

// 3️⃣ Inicializa Firebase
const app = initializeApp(firebaseConfig);

// 4️⃣ Inicializa los servicios que vas a usar
const db = getFirestore(app);  // Firestore
const auth = getAuth(app);     // Auth

// 5️⃣ Exporta los objetos para poder usarlos en otros archivos
export { app, db, auth };