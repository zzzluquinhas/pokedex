import './MyPokemonPage.css'
import React, { useState, useEffect } from 'react';
import { ProfileSideBar } from '../ProfileSideBar/ProfileSideBar';
import { PokedexSearchBar } from '../PokedexSearch/PokedexSearchBar';
import Pagination from '../../assets/components/Pagination';
import { PokemonIcon } from './PokemonIcon';

export function MyPokemonPage(props){
    const [pokemonPages, setPokemonPages] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonPerPage] = useState(30);
    const [sidebarWidth, setSidebarWidth] = useState("50px"); // Estado para armazenar a largura da barra lateral
    const [userInput, setUserInput] = useState("");
  
    useEffect(() => {
      const fetchPokemonData = async (userInput) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokedex/national`);
        const data = await response.json();
        
        function filterPokemonEntries(pokemonEntries, userInput) {
          return pokemonEntries.filter(entry => {
              return (
                  entry.entry_number.toString().includes(userInput) ||
                  entry.pokemon_species.name.includes(userInput)
              );
          });
      }
        setPokemonPages(data.pokemon_entries.filter(entry => {
          return (
              entry.entry_number.toString().includes(userInput) ||
              entry.pokemon_species.name.includes(userInput)
          );
      }));
  
      };
  
      setCurrentPage(1);
  
      fetchPokemonData(userInput);
    }, [userInput]);
  
    const indexOfLastPokemon = currentPage * pokemonPerPage;
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonPerPage;
    const currentPokemon = pokemonPages.slice(
      indexOfFirstPokemon,
      indexOfLastPokemon
    );
  
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
    const handleUserInputChange = (inputValue) => {
      setUserInput(inputValue);
    };

    return(
        <>
            <ProfileSideBar setSidebarWidth={setSidebarWidth} />
            <div className='my-pokemon-container' style={{ marginLeft: sidebarWidth }}>
                <PokedexSearchBar onSubmit={handleUserInputChange} />
                <Pagination
                postsPerPage={pokemonPerPage}
                totalPosts={pokemonPages.length}
                paginate={paginate}
                />
                <div className='my-pokemon-title'>
                    MY POKEMON
                </div>
                <div className='my-pokemon-list'>
                    {currentPokemon.map(pokemon => (
                        <div key={pokemon.entry_number} className="pokemon-grid-item">
                            <PokemonIcon pokemonNumber={pokemon.entry_number} pokemonName={pokemon.pokemon_species.name}></PokemonIcon>
                        </div>
                    ))}        
                </div>
            </div>
        </>
        
    )
}