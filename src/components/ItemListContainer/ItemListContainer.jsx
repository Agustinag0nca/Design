import "./App.css";
import NavBar from "./components/NavBar";
import { getProductById, getProducts } from "../../asyncMock";
import ItemListContainer from "./components/ItemListContainerItemListContainer";
import { useEffect } from "react";
import ItemList, { useParams } from 'react-router-dom';

const ItemListContainer = ({greeting}) => {
    const [products,setProducts] =useState([])

    const {categoryId} = useParams()

    useEffect(() => {
        const asyncFunction = categoryId ? getProductByCategory : getProducts
        asyncFunction(categoryId)
        .then(response => {
            setProducts (response)
            })
            .catch(error=>{
                console.error(error)
            })
            },[categoryId])
    return (
        <div>
                    <h1>{greeting}</h1>
                    <ItemList products={products}/>
        </div>
) 
}

export default ItemListContainer