import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

let db = false;

export const getDb = () => {
  if (!db) {
    const firebaseConfig = {
      apiKey: "AIzaSyDENXcLOKf5dhlxJJE8irpncGc9CHfNSB0",
      authDomain: "tifatour-haji-umroh.firebaseapp.com",
      projectId: "tifatour-haji-umroh",
      storageBucket: "tifatour-haji-umroh.appspot.com",
      messagingSenderId: "811514025222",
      appId: "1:811514025222:web:b49f9bcf908ee438663a87",
      measurementId: "G-PNDEE38LNF",
    };

    const app = initializeApp(firebaseConfig);

    db = getFirestore(app);
  }

  return db;
};
