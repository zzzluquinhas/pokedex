import { NicknameModal } from './NicknameModal';
import './PokemonIcon.css'
import React, { useState, useEffect } from 'react';

export function PokemonIcon(props){
    const [pokemonImage, setPokemonImage] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const fetchPokemonData = async () => {
            setPokemonImage(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.pokemonNumber.replace(/^0+/, '')}.png`);
        };

        fetchPokemonData();
    }, []);

    return (
        <>
            <div className='pokemon-icon-container' onClick={() => setIsOpen(true)}>
                <div className='pokemon-icon-image'>
                    <img className="pokemon-img" src={pokemonImage}></img>
                </div>
                <div className='pokemon-name'>{props.pokemonName}</div>
            </div>
            <NicknameModal isOpen={isOpen} setNickname={setIsOpen} /> {/* Corrected function name */}
        </>
    )
}