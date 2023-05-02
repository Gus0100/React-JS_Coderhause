import ItemCount from "./src/Components/ItemCount/ItemCount"
import "./src/Components/"



const Item = ({id, name, img, price, stock}) => {
    
    return (
        <article className="card">
            <header>
                <h2 className="text-title">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt="{name}" className="patin"/>
            </picture>
            <section>
                <p>
                <button>Ver detalles</button>
                </p>
                <p>
                    Stock disponible: {stock}
                </p>
                <p>
                    Precio: {price}
                </p>
            </section>
            <footer>
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada', quantity)} />
            </footer>
        </article>
    )
}

export default Item