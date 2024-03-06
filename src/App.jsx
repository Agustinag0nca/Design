import NavBar from "./components/NavBar";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
      <NavBar/>
      </div>
      <h1>Carrito de Compras</h1>
    </>
  );
}

const express = require('express');
const app = express();

app.use(express.static('public', {
  setHeaders: (res, path) => {
    if (path.endsWith('.js') || path.endsWith('.jsx')) {
      res.setHeader('Content-Type', 'text/javascript');
    }
  }
}));

app.listen(3000, () => {
  console.log('Servidor en ejecución en el puerto 3000');
});


export default App