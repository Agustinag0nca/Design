import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer.jsx";

import { CartProvider} from "./components/CartContext.jsx"
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* Contenido de la aplicación */}
    </div>
  );
}

  return (
      <div className="App">
      <BrowserRouter>
      <CartProvider>
        <NavBar/>
        <Routes>
        <Route path = '/' element= {<ItemListContainer/>}/>
        <Route path = '/category/:categoryId' element= {<ItemListContainer/>}/>
        <Route path = '/item/:itemId' element= {<ItemListContainer/>}/>
        <Route path="/cart" element = {<Cart/>}/>
        <Route path = '*' element= {<h1>404 NOT FOUND</h1>}/>
        </Routes>
        </CartProvider>
        </BrowserRouter>
      </div>
  );


export default App;