import './PokemonIcon.css'
import React, { useState, useEffect } from 'react';

export function PokemonIcon(props){
    const [pokemonImage, setPokemonImage] = useState([]);

    useEffect(() => {
        const fetchPokemonData = async () => {
            setPokemonImage(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.pokemonNumber}.png`);
        };

        fetchPokemonData();
    }, []);

    return (
        <div className='pokemon-icon-container'>
            <div className='pokemon-icon-image'>
                <img className="pokemon-img" src={pokemonImage}></img>
            </div>
            <div className='pokemon-name'>{props.pokemonName}</div>
        </div>
    )
}