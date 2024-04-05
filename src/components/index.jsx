import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./App.css";
import NavBar from "./components/NavBar/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";
import firebase from 'firebase/app';
import 'firebase/firestore';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos"} />
      <ItemCount
        initial={1}
        stock={10}
        onAdd={(quantity) => console.log("Cantidad agregada", quantity)}
      />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

