import { useContext } from "react";
import CartContext from "../../components/CartContext/CartContext.jsx";
import { Link } from "react-router-dom";
import Cart from "../../components/Cart/CartItem.jsx";

const CartWidget = () => {

    const{ totalQuantity} = useContext (CartContext)
return ( 
<Link to = "/cart" className="CartWidget" style={{display: totalQuantity > 0 ? "block" : "none"}}>
    <img className="CartImg" src={Cart} alt="cart-widget" />
    {totalQuantity}
</Link>
)
}
export default CartWidget;