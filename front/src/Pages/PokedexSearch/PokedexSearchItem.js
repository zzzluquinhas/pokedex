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
            setPokemonName(props.pokemonName.charAt(0).toUpperCase() + props.pokemonName.slice(1));
            setPokemonNumber(props.pokemonNumber.toString().padStart(4, '0'));

            console.log(pokemonType);
        };

        fetchPokemonData();
    }, []);
    return(
        <div className="pokemon-item-wrapper">
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
            <button onClick={() => setOpenInfo(true)}>Abrir modal</button>
            <PokemonInfoPage isOpen={openInfo} setInfoOpen={() => setOpenInfo(!openInfo)} pokemonNumber={pokemonNumber}></PokemonInfoPage>
        </div>
    )
}