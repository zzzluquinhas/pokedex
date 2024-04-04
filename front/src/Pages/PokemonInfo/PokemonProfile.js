import './PokemonProfile.css'
export function PokemonProfile(){
    return(
        <div className='pokemon-profile-wrapper'>
            <div className='pokemon-profile-id'>
                <div className='pokemon-profile-number'>Nº 0000</div>
                <div className='pokemon-profile-name'>Iron Valiant</div>
                <div className='pokemon-profile-img'></div>
            </div>
            <div className="pokemon-profile-typing">
                <div id="pokemon-profile-typing-item">
                    Grass
                </div>
                <div id="pokemon-profile-typing-item">
                    Poison
                </div>
            </div>
        </div>
    )
}