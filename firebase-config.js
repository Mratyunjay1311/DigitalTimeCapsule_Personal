
 
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-analytics.js";

   import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";
    import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";


  const firebaseConfig = {
    apiKey: "AIzaSyD79-R8CKL9hv0M9ER7V_a6L83YBiQqNgU",
    authDomain: "time-capsule-398f5.firebaseapp.com",
    projectId: "time-capsule-398f5",
    storageBucket: "time-capsule-398f5.appspot.com",
    messagingSenderId: "407628001478",
    appId: "1:407628001478:web:b96aa7eed287a552b627c7",
    measurementId: "G-8324ZZENGS"
  };

 
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

   export const auth = getAuth(app);
   export const db = getFirestore(app);

