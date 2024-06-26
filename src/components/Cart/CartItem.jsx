import "./Cart.css";
import { useContext } from "react"; 
import { CartContext } from "../CartContext/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../../components/Cart/CartItem.jsx";


const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useContext(CartContext);

    return (
        <div>
            {totalQuantity === 0 ? (
                <div>
                    <h1>No hay items en el carrito</h1>
                    <Link to="/" className="Option">Productos</Link>
                </div>
            ) : (
                <div>
                    {cart.map(p => <CartItem key={p.id} {...p} />)}
                    <h3>Total: ${total}</h3>
                    <button onClick={() => clearCart()} className="Button">Limpiar carrito</button>
                    <Link to="/checkout" className="Option">Checkout</Link>
                </div>
            )}
        </div>
    );
};

export default Cart;
