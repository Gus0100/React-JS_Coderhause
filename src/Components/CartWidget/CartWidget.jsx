import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';


const CartWidget = () => {

    return (
        <div className='cart-widget'>
            <FontAwesomeIcon icon={faCartShopping} size='2x' style={{color: "#fd64a3",}} />
            <span className='cart-items'>1</span>
        </div>
    );
};

export default CartWidget;


