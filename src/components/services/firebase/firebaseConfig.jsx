import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Correct import for Firestore
import { StrictMode } from "react";
import ReactDOM from "react-dom"; // Correct import for ReactDOM
import App from "../../../App";

const firebaseConfig = {
    apiKey: "AIzaSyCyWm9kfS-8WirAotyWDk1fVq1_DAAC8Fc",
    authDomain: "designclub54040.firebaseapp.com",
    projectId: "designclub54040",
    storageBucket: "designclub54040.appspot.com",
    messagingSenderId: "55528414141",
    appId: "1:55528414141:web:b361e9da42cda3a03150d4",
    measurementId: "G-NG3TT1DEF1"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Get Firestore instance
export const db = getFirestore(app);

// Render the React app
const rootElement = document.getElementById("root");
ReactDOM.render(
    <StrictMode>
        <App />
    </StrictMode>,
    rootElement
);
