import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { firestore } from "firebase/app";
import ItemList from "../../ItemList/ItemList.jsx";

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const db = firestore();
                let collectionRef;
                if (categoryId) {
                    collectionRef = query(collection(db, "products"), where("category", "==", categoryId));
                } else {
                    collectionRef = collection(db, "products");
                }
                const querySnapshot = await getDocs(collectionRef);
                const productsAdapted = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setProducts(productsAdapted);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, [categoryId]);

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products} />
        </div>
    );
};

export default ItemListContainer;

