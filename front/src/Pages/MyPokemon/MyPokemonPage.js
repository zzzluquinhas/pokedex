import './MyPokemonPage.css'
import React, { useState, useEffect } from 'react';
import { ProfileSideBar } from '../ProfileSideBar/ProfileSideBar';
import Pagination from '../../assets/components/Pagination';
import { PokemonIcon } from './PokemonIcon';

export function MyPokemonPage(props){
    const [pokemonPages, setPokemonPages] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonPerPage] = useState(30);
    const [sidebarWidth, setSidebarWidth] = useState("50px"); // Estado para armazenar a largura da barra lateral
  
    useEffect(() => {
      const fetchPokemonData = async () => {
        const response = await fetch(`http://localhost:5000/getPokemons?user=${props.user}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            },
          });
        const data = await response.json();
        console.log(data);
        
        setPokemonPages(data);
  
      };
  
      setCurrentPage(1);
  
      fetchPokemonData();
    }, []);
  
    const indexOfLastPokemon = currentPage * pokemonPerPage;
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonPerPage;
    
    const currentPokemon = (pokemonPages.length > 0) ? pokemonPages.slice(
      indexOfFirstPokemon,
      indexOfLastPokemon
    ) : [];
  
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
    return(
        <>
            <ProfileSideBar setSidebarWidth={setSidebarWidth} />
            <div className='my-pokemon-container' style={{ marginLeft: sidebarWidth }}>
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
                            <PokemonIcon pokemonNumber={pokemon.pokemonID} pokemonName={pokemon.nickname} user={props.user}></PokemonIcon>
                        </div>
                    ))}        
                </div>
            </div>
        </>
        
    )
}