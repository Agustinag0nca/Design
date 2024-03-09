import NavBar from "./components/NavBar";
import { usestate } from"react";
import { useState } from"react";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <NavBar />
      </div>
      <h1>Carrito de Compras</h1>
    </>
  );
}

export default App