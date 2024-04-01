import { useState, useEffect } from "react";
import {getProductById} from "../asyncMock.jsx";
import ItemDetail from "../ItemDetail/ItemDetail.jsx"
import { useParams } from "react-router-dom";
import { response } from "express";
import "./ItemDetailContainer.css";


const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId} =useParams()

        useEffect(() => { 
            setLoading(true)

            const docRef = doc (db, "products",itemId)

            getDoc (docRef)
            .then (response => {
                const data = response.data()
                const productAdapted = {id:response.id,...data}
                setProduct(productAdapted)
            })

            .catch (error => {
                console.log(error)
            })
            .finally (()=>{
                setLoading(false)
            })
    }, [itemId])

}
    export default ItemDetailContainer