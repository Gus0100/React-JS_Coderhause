import React from 'react'
import Item from '../Item/Item'
import './ItemList.scss'

const ItemList = ({ products }) => {

    return (
        <div>
            <h2>Productos</h2>
            <div className = 'containercards'>
                {products.map(prod => <Item key={prod.id} {...prod} />)}
            </div>
        </div>
    )
}

export default ItemList


