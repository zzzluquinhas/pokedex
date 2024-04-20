import './PokemonAbilities.css'
export function PokemonAbilities(props){
    function formatAbilityName(name) {
        // Split the string by dashes
        const words = name.split('-');
    
        // Capitalize the first letter of each word
        const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
    
        // Join the words back together with a space
        const formattedName = capitalizedWords.join(' ');
    
        return formattedName;
    }
    return(
        <div className='pokemon-abilities-wrapper'>
            <div className='pokemon-abilities-title'>Abilities:</div>
            <div className='pokemon-abilities-container'>
                {props.pokemonAbilities.map(ability => (
                    <div class="pokemon-ability">
                        {formatAbilityName(ability.ability.name)}
                    </div>
                ))}
            </div>
        </div>
    )
}