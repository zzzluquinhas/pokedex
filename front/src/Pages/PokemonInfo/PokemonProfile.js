import './PokemonProfile.css'
export function PokemonProfile(props){
    return(
        <div className='pokemon-profile-wrapper'>
            <div className='pokemon-profile-id'>
                <div className='pokemon-profile-number'>Nº {props.pokemonNumber}</div>
                <div className='pokemon-profile-name'>{props.pokemonName}</div>
                {props.pokemonType.slice(0, 1).map(type => (
                <div className="pokemon-profile-img" id={`${type.type.name}`}>
                    <img className="pokemon-img" src={props.pokemonImage} width="220" height="220"></img>
                </div>
            ))}
            </div>
            <div className="pokemon-profile-typing">
                {props.pokemonType.map(type => (
                    <div class="pokemon-profile-typing-item" id={`${type.type.name}`}>
                        {type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}
                    </div>
                ))}
            </div>
        </div>
    )
}