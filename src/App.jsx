import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer.jsx";
import Cart from "./components/Cart/Cart.jsx"; // Importa el componente Cart
import express from "express"; 
import { CartProvider } from "./components/CartContext.jsx";


const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/item/:itemId" element={<ItemListContainer />} />
            <Route path="/cart" element={<Cart />} /> {/* Usa el componente Cart */}
            <Route path="*" element={<h1>404 NOT FOUND</h1>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
};

const app = express();

// Middleware para servir archivos .jsx con tipo MIME correcto
app.use((req, res, next) => {
  if (req.path.endsWith('.jsx')) {
    res.type('text/javascript');
  }
  next();
});

// Arranca el servidor (esto generalmente se coloca en un archivo separado para la configuración del servidor)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});

export default App;
