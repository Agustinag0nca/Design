import './ItemList.css';
import Item from '../Item/Item.jsx';
import React, { memo } from 'react';

const ItemList = ({ products }) => {
    return (
        <div className="ListGroup">
            {
                products.map(product => { 
                    return <Item key={product.id} {...product} />;
                })
            }
        </div>
    );
};

export default memo(ItemList);
