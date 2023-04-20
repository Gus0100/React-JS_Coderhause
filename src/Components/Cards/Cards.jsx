import "./Cards.scss"


const Cards = () => {

    return (
        <div className="containercards container">
            <div class="card">
                <div>
                    <img src="public\bota.jpg" alt="" class="patin"/>
                </div>
                <p class="text-title">Bota</p>
                <p class="text-body">Bota de patinaje artístico con estilo elegante.</p>
            </div>
            <div class="card">
                <div>
                    <img src="public\plancha.jpg" alt="" class="patin"/>
                </div>
                <p class="text-title">Plancha</p>
                <p class="text-body">Plancha de patinaje con precisión y estabilidad.</p>
            </div>
            <div class="card">
                <div>
                    <img src="public\ruedas.jpg" alt="" class="patin"/>
                </div>
                <p class="text-title">Ruedas</p>
                <p class="text-body">Ruedas de patinaje con agarre y durabilidad.</p>
            </div>
        </div>
    );
};

export default Cards;