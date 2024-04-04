import './PokemonStats.css'
import { PokemonStatsBar } from './PokemonStatsBar'
export function PokemonStats(props){
    return(
        <div className="pokemon-stats-wrapper">
            <div className="pokemon-stats-title">Stats:</div>
            <PokemonStatsBar statsName="HP" statsValue={props.pokemonStats[0].base_stat}></PokemonStatsBar>
            <PokemonStatsBar statsName="Attack" statsValue={props.pokemonStats[1].base_stat}></PokemonStatsBar>
            <PokemonStatsBar statsName="Defense" statsValue={props.pokemonStats[2].base_stat}></PokemonStatsBar>
            <PokemonStatsBar statsName="Sp.Atk" statsValue={props.pokemonStats[3].base_stat}></PokemonStatsBar>
            <PokemonStatsBar statsName="Sp.Def" statsValue={props.pokemonStats[4].base_stat}></PokemonStatsBar>
            <PokemonStatsBar statsName="Speed" statsValue={props.pokemonStats[5].base_stat}></PokemonStatsBar>
            <div className="pokemon-total-stats"> Total: {
                props.pokemonStats[0].base_stat +
                props.pokemonStats[1].base_stat +
                props.pokemonStats[2].base_stat +
                props.pokemonStats[3].base_stat +
                props.pokemonStats[4].base_stat +
                props.pokemonStats[5].base_stat
            }</div>
        </div>
    )
}