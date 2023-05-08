/* import React, { useEffect, useState } from 'react'; */
/* import ItemList from '../ItemList/ItemList'; */
import { getProducts } from '../../asyncMock';

const ItemListContainer = () => {
    /* const [products, setProducts] = useState([]) */

    getProducts()
        .then((products) => {
            console.log(products)
        })
        .catch((error) => {
            console.log(error);
        })

    return (
        <div className='container'>
            <h1></h1>
            <p>¡Bienvenido a nuestra tienda de patinaje!</p>
            <div>
            </div>
        </div>
    );
};

export default ItemListContainer;