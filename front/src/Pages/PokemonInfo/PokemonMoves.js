import './PokemonMoves.css'
import { PokemonMoveBar } from './PokemonMoveBar'
export function PokemonMoves(props){
    return(
        <div className='pokemon-moves-wrapper'>
            <div className='pokemon-moves-title'>
                Moves:
            </div>
            <div className='pokemon-moves-container'>
                {props.pokemonMoves.map(move => (    
                    <PokemonMoveBar moveUrl={move.move.url}></PokemonMoveBar>
                ))}
            </div>
        </div>
    )
}