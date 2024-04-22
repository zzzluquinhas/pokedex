import { NicknameModal } from './NicknameModal';
import './PokemonIcon.css'
import React, { useState, useEffect } from 'react';

export function PokemonIcon(props){
    const [pokemonImage, setPokemonImage] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [pokemonId, setPokemonId] = useState([]);
    const [nickname, setNickname] = useState(""); // State to store the nickname

    useEffect(() => {
        const fetchPokemonData = async () => {
            setPokemonImage(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.pokemonNumber}.png`);
        };

        setPokemonId(String(props.pokemonNumber).padStart(4, '0'));

        fetchPokemonData();
    }, []);

    // Function to update the nickname
    const updateNickname = (newNickname) => {
        setNickname(newNickname);
    };

    return (
        <>
            <div className='pokemon-icon-container' onClick={() => setIsOpen(true)}>
                <div className='pokemon-icon-image'>
                    <img className="pokemon-img" src={pokemonImage}></img>
                </div>
                <div className='pokemon-name'>{nickname || props.pokemonName}</div> {/* Display the nickname if available */}
            </div>
            <NicknameModal isOpen={isOpen} setNickname={setIsOpen} user={props.user} pokemonId={pokemonId} updateNickname={updateNickname}/> {/* Pass the updateNickname function */}
        </>
    )
}