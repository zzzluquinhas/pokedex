import './PokedexSearchItem.css'
import { PokemonInfoPage } from '../PokemonInfo/PokemonInfoPage';
import React, { useState, useEffect } from 'react';

export function PokedexSearchItem(props){
    const [pokemonImage, setPokemonImage] = useState([]);
    const [pokemonType, setPokemonType] = useState([]);
    const [pokemonName, setPokemonName] = useState([]);
    const [pokemonNumber, setPokemonNumber] = useState([]);
    const [openInfo, setOpenInfo] = useState(false);

    useEffect(() => {
        const fetchPokemonData = async () => {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${props.pokemonNumber}`);
            const data = await response.json();
            setPokemonImage(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.pokemonNumber}.png`);
            setPokemonType(data.types);
            function formatPokemonName(name) {
                // Split the string by dashes
                const words = name.split('-');
            
                // Capitalize the first letter of each word
                const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
            
                // Join the words back together with a space
                const formattedName = capitalizedWords.join(' ');
            
                return formattedName;
            }
            setPokemonName(formatPokemonName(props.pokemonName));
            setPokemonNumber(props.pokemonNumber.toString().padStart(4, '0'));

        };

        fetchPokemonData();
    }, []);
    return(
        <div className="pokemon-item-wrapper">
            <div className='pokemon-item-btn' onClick={() => setOpenInfo(true)}>
                {pokemonType.slice(0, 1).map(type => (
                    <div className="pokemon-img-wrapper" id={`${type.type.name}`}>
                        <img className="pokemon-img" src={pokemonImage} width="180" height="180"></img>
                    </div>
                ))}
                <div className="pokemon-info-wrapper">
                    <div className="pokemon-number">Nº {pokemonNumber}</div>
                    <div className="pokemon-name">{pokemonName}</div>
                    <div className="pokemon-typing">
                        {pokemonType.map(type => (
                            <div class="pokemon-typing-item" id={`${type.type.name}`}>
                                {type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <PokemonInfoPage pkmNumber={props.pokemonNumber} isOpen={openInfo} setInfoOpen={() => setOpenInfo(!openInfo)} ></PokemonInfoPage>
        </div>
    )
}