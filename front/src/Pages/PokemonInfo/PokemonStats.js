import './PokemonStats.css'
import { PokemonStatsBar } from './PokemonStatsBar'
export function PokemonStats(){
    return(
        <div className="pokemon-stats-wrapper">
            <div className="pokemon-stats-title">Stats:</div>
            <PokemonStatsBar statsName="HP" statsValue="60"></PokemonStatsBar>
            <PokemonStatsBar statsName="Attack" statsValue="90"></PokemonStatsBar>
            <PokemonStatsBar statsName="Defense" statsValue="60"></PokemonStatsBar>
            <PokemonStatsBar statsName="Sp.Atk" statsValue="53"></PokemonStatsBar>
            <PokemonStatsBar statsName="Sp.Def" statsValue="50"></PokemonStatsBar>
            <PokemonStatsBar statsName="Speed" statsValue="72"></PokemonStatsBar>
            <div className="pokemon-total-stats"> Total: 400</div>
        </div>
    )
}