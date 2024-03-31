import './PokedexSearchItem.css'

export function PokedexSearchItem(){
    return(
        <div className="pokemon-item-wrapper">
            <div className="pokemon-img-wrapper">
                <img className="pokemon-img"></img>
            </div>
            <div className="pokemon-info-wrapper">
                <div className="pokemon-number">Nº 0001</div>
                <div className="pokemon-name">Bulbasaur</div>
                <div className="pokemon-typing">
                    <div id="pokemon-typing-item">
                        Grass
                    </div>
                    <div id="pokemon-typing-item">
                        Poison
                    </div>
                </div>
            </div>
        </div>
    )
}