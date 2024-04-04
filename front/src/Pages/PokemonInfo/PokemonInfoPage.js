import './PokemonInfoPage.css'
import { PokemonStats } from './PokemonStats'
import { PokemonMoves } from './PokemonMoves'
import { PokemonAbilities } from './PokemonAbilities'
import { PokemonProfile } from './PokemonProfile'
import React, { useState, useEffect } from 'react';


export function PokemonInfoPage({pkmNumber, isOpen, setInfoOpen}){
    const [pokemonImage, setPokemonImage] = useState([]);
    const [pokemonType, setPokemonType] = useState([]);
    const [pokemonName, setPokemonName] = useState([]);
    const [pokemonNumber, setPokemonNumber] = useState([]);
    const [pokemonAbilities, setPokemonAbilities] = useState([]);
    const [pokemonStats, setPokemonStats] = useState([]);
    const [pokemonMoves, setPokemonMoves] = useState([]);
    
    useEffect(() => {
        const fetchPokemonData = async () => {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pkmNumber}`);
            const data = await response.json();
            console.log(data);
            setPokemonImage(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pkmNumber}.png`);
            setPokemonType(data.types);
            setPokemonName(data.species.name.charAt(0).toUpperCase() + data.species.name.slice(1));
            setPokemonNumber(pkmNumber.toString().padStart(4, '0'));
            setPokemonAbilities(data.abilities);
            setPokemonStats(data.stats);
            setPokemonMoves(data.moves);
        };

        fetchPokemonData();
    }, []);

    if(isOpen){
        return(
        <>
            <div className='pokemon-info-page-modal'>
                <div className="pokemon-info-page-wrapper">
                    <div className="pokemon-info-page-components">
                        <div className="pokemon-info-page-left-side">
                            <PokemonProfile 
                            pokemonNumber={pokemonNumber}
                            pokemonName={pokemonName}
                            pokemonType={pokemonType}
                            pokemonImage={pokemonImage}
                            ></PokemonProfile>
                            <PokemonAbilities pokemonAbilities={pokemonAbilities}></PokemonAbilities>
                        </div>
                        <div className="pokemon-info-page-right-side">
                            <div className="pokemon-info-page-close">
                                <button className="close-btn" onClick={setInfoOpen}></button>   
                            </div>
                            <div className="pokemon-info-page-right-components">
                                <PokemonStats pokemonStats={pokemonStats}></PokemonStats>
                                <PokemonMoves pokemonMoves={pokemonMoves}></PokemonMoves>
                            </div>
                        </div>
                    </div>
                    <div className="pokemon-info-page-add">
                        <button className="pokemon-add-btn">ADD TO YOUR POKEMON LIST</button>
                    </div>
                </div>
            </div>
        </>
    )}

    return null;
}