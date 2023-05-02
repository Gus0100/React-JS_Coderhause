import ItemCount from "../ItemCount/ItemCount";
import "./Cards.scss"


const Cards = () => {

    return (
        <div className="containercards container">
            <div className="card">
                <div>
                    <img src="public\bota.jpg" alt="" className="patin"/>
                </div>
                <p className="text-title">Bota</p>
                <p className="text-body">Bota de patinaje artístico con estilo elegante.</p>
                <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada', quantity)} />
            </div>
            <div className="card">
                <div>
                    <img src="public\plancha.jpg" alt="" className="patin"/>
                </div>
                <p className="text-title">Plancha</p>
                <p className="text-body">Plancha de patinaje con precisión y estabilidad.</p>
                <ItemCount initial={1} stock={8} onAdd={(quantity) => console.log('Cantidad agregada', quantity)} />
            </div>
            <div className="card">
                <div>
                    <img src="public\ruedas.jpg" alt="" className="patin"/>
                </div>
                <p className="text-title">Ruedas</p>
                <p className="text-body">Ruedas de patinaje con agarre y durabilidad.</p>
                <ItemCount initial={1} stock={6} onAdd={(quantity) => console.log('Cantidad agregada', quantity)} />
            </div>
        </div>
    );
};

export default Cards;