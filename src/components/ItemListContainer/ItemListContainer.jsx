import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase'; // Asegúrate de importar db desde el archivo donde se define la instancia de Firebase

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
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
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [categoryId]); 

    return (
        <div>
            <h1>{greeting}</h1>
        </div>
    );
};

export default ItemListContainer;
