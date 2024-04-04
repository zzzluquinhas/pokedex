import './PokemonAbilities.css'
export function PokemonAbilities(props){
    return(
        <div className='pokemon-abilities-wrapper'>
            <div className='pokemon-abilities-title'>Abilities:</div>
            <div className='pokemon-abilities-container'>
                {props.pokemonAbilities.map(ability => (
                    <div class="pokemon-ability">
                        {ability.ability.name.charAt(0).toUpperCase() + ability.ability.name.slice(1)}
                    </div>
                ))}
            </div>
        </div>
    )
}