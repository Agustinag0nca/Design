// client/App.js
import { useState } from “react”
import NavBar from “/components/NavBar.jsx”

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="App">
        <NavBar />
      </div>
      <h1>Carrito de Compras</h1>
    </>
  );
}

export default App;