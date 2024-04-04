import './PokemonStats.css'
import { PokemonStatsBar } from './PokemonStatsBar'
export function PokemonStats(){
    return(
        <div className="pokemon-stats-wrapper">
            <div className="pokemon-stats-title">Stats:</div>
            <PokemonStatsBar statsName="HP" statsValue="250"></PokemonStatsBar>
            <PokemonStatsBar statsName="Attack" statsValue="90"></PokemonStatsBar>
            <PokemonStatsBar statsName="Defense" statsValue="60"></PokemonStatsBar>
            <PokemonStatsBar statsName="Sp.Atk" statsValue="10"></PokemonStatsBar>
            <PokemonStatsBar statsName="Sp.Def" statsValue="233"></PokemonStatsBar>
            <PokemonStatsBar statsName="Speed" statsValue="72"></PokemonStatsBar>
            <div className="pokemon-total-stats"> Total: 400</div>
        </div>
    )
}