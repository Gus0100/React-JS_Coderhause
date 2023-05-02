import React from 'react';

const ItemListContainer = ({ greeting }) => {
    return (
        <div className='container'>
            <h1>{greeting}</h1>
            <p>¡Bienvenido a nuestra tienda de patinaje!</p>
        </div>
    );
};

export default ItemListContainer;