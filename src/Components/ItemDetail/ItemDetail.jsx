import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.scss"


const ItemDetail = ({id, name, img, price, stock}) => {
    
    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt="{name}" className="ItemImg"/>
            </picture>
            <section>
                <p>
                <Link to={'/item/${id}'}>Ver detalle</Link>
                </p>
                <p className="Info">
                    Precio: {price}
                </p>
                <p className="Info">
                    Stock disponible: {stock}
                </p>
            </section>
            <footer className="ItemFooter">
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada', quantity)} />
            </footer>
        </article>
    )
}

export default ItemDetail