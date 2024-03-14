import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";



const firebaseConfig = {
    apiKey: "AIzaSyCyWm9kfS-8WirAotyWDk1fVq1_DAAC8Fc",
    authDomain: "designclub54040.firebaseapp.com",
    projectId: "designclub54040",
    storageBucket: "designclub54040.appspot.com",
    messagingSenderId: "55528414141",
    appId: "1:55528414141:web:b361e9da42cda3a03150d4",
    measurementId: "G-NG3TT1DEF1"
}

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const db = getFirestore(app)