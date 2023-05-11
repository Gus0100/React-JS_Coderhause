import ItemList from '../ItemList/ItemList';
import { useState } from 'react';
import { useEffect } from 'react';
import { getProductsByCategory, getProducts } from '../../asyncMock'

import { useParams } from 'react-router-dom'


const ItemListContainer = () => {

    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts

        asyncFunc(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [categoryId])

    return (
        <div className='container'>
            <h1></h1>
            <p>¡Bienvenido a nuestra tienda de patinaje!</p>
            <div>
                <ItemList products={products}/>
            </div>
        </div>
    );
};

export default ItemListContainer;