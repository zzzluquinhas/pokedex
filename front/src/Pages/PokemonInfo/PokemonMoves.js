import './PokemonMoves.css'
import { PokemonMoveBar } from './PokemonMoveBar'
export function PokemonMoves(){
    return(
        <div className='pokemon-moves-wrapper'>
            <div className='pokemon-moves-title'>
                Moves:
            </div>
            <div className='pokemon-moves-container'>
                <PokemonMoveBar moveName="Vine Whip" moveType="Grass" moveEffect="Phisical" movePP="10"></PokemonMoveBar>
                <PokemonMoveBar moveName="Water Gun" moveType="Water" moveEffect="Special" movePP="10"></PokemonMoveBar>
                <PokemonMoveBar moveName="Vine Whip" moveType="Grass" moveEffect="Phisical" movePP="10"></PokemonMoveBar>
                <PokemonMoveBar moveName="Vine Whip" moveType="Grass" moveEffect="Phisical" movePP="10"></PokemonMoveBar>   
                <PokemonMoveBar moveName="Vine Whip" moveType="Grass" moveEffect="Phisical" movePP="10"></PokemonMoveBar>
                <PokemonMoveBar moveName="Vine Whip" moveType="Grass" moveEffect="Phisical" movePP="10"></PokemonMoveBar>
                <PokemonMoveBar moveName="Vine Whip" moveType="Grass" moveEffect="Phisical" movePP="10"></PokemonMoveBar>
                <PokemonMoveBar moveName="Vine Whip" moveType="Grass" moveEffect="Phisical" movePP="10"></PokemonMoveBar>
            </div>
        </div>
    )
}