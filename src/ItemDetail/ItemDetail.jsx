import "./ItemDetail.css"
import ItemCount from "../components/ItemCount/ItemCount.jsx";
import { useContext, useState } from "react";
import { CartContext} from "../components/CartContext/CartContext.jsx";

const ItemDetail= ({id,name,img,description,price,category}) => {

    const[quantityAdded, setQuantityAdded] = useState(0)

    const { addItem} = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)
        const item = {
            id,name,price
        }

        addItem(item,quantity)

    }
    return(
        <article className="CardItem">
            <header className="Header">
            <h2 className="ItemHeader">
                {name}
            </h2>
            </header>
            <picture>
                <img src={img} alt={name} className='ItemImg'/>
            </picture>

            <section>
                <p className="Info" >
                    categoria: {category}
                </p>
                <p className="Info" >
                    Precio: ${price}
                </p>
                <p className="Info" >
                    description: {description}
                </p>
            </section>
            <footer className="ItemFooter">
                {quantityAdded > 0 ? (
                    <Link to="/cart" className="Option">Terminar compra</Link>
                ) : (
                    <ItemCount initial={1} onAdd={handleOnAdd} />
                )}
            </footer>
        </article>
    );
};

export default ItemDetail;