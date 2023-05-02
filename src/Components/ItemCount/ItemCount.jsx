import { useState } from "react"
import Button from 'react-bootstrap/Button';
import './ItemCount.scss'


const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () =>{
        if (quantity > 1) {
            setQuantity (quantity - 1)
        }
    }

    return (
        <div>
            <div className="containerCount">
                <Button onClick={decrement} variant="outline-info" className="countButton">-</Button>
                <h4 variant="outline-info" className="quantityButton">{quantity}</h4>
                <Button onClick={increment} variant="outline-info" className="countButton">+</Button>
            </div>
            <div>
                <Button onClick={() => onAdd(quantity)} disabled = {!stock} variant="outline-info" className="countButton">
                    Agregar al carrito
                </Button>
            </div>
        </div>
    )
}

export default ItemCount