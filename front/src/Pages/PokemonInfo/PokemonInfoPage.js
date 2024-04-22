import './PokemonInfoPage.css'
import { PokemonStats } from './PokemonStats'
import { PokemonMoves } from './PokemonMoves'
import { PokemonAbilities } from './PokemonAbilities'
import { PokemonProfile } from './PokemonProfile'
import { toast } from 'react-toastify';
import React, { useState, useEffect } from 'react';


export function PokemonInfoPage({user, pkmNumber, isOpen, setInfoOpen}){
    const [pokemonImage, setPokemonImage] = useState([]);
    const [pokemonType, setPokemonType] = useState([]);
    const [pokemonName, setPokemonName] = useState([]);
    const [pokemonNumber, setPokemonNumber] = useState([]);
    const [pokemonAbilities, setPokemonAbilities] = useState([]);
    const [pokemonStats, setPokemonStats] = useState([]);
    const [pokemonMoves, setPokemonMoves] = useState([]);

    console.log(user);

    const handleCreate = (event) => {
        event.preventDefault(); // Prevent form submission
        console.log(user);
        console.log(pokemonNumber);
        fetch(`http://localhost:5000/createPokemon?user=${user}&pokemonID=${pokemonNumber}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
        })
        .then(response => {
          if (response.ok) {
            return response.json(); // Parse response JSON
          } else {
            throw new Error('Invalid credentials'); // Throw error for non-OK responses
          }
        })
        .then(data => {
          console.log(data); // Handle successful response data
          toast.success("Pokemon added into your Pokemon List");
        })
        .catch(error => {
          console.error('Error logging in:', error.message); // Handle errors
          toast.error("Error adding Pokemon to your list");
        });
      };
    
    useEffect(() => {
        const fetchPokemonData = async () => {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pkmNumber}`);
            const data = await response.json();
            setPokemonImage(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pkmNumber}.png`);
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
            setPokemonName(formatPokemonName(data.species.name));
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
                        <button className="pokemon-add-btn" onClick={handleCreate}>ADD TO YOUR POKEMON LIST</button>
                    </div>
                </div>
            </div>
        </>
    )}

    return null;
}