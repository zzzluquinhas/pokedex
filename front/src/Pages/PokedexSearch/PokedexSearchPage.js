import React, { useState, useEffect } from "react";
import { PokedexSearchResult } from "./PokedexSearchResult";
import { ProfileSideBar } from "../ProfileSideBar/ProfileSideBar";
import { PokedexSearchBar } from "./PokedexSearchBar";
import Pagination from "../../assets/components/Pagination";

export function PokedexSearchPage() {
  const [pokemonPages, setPokemonPages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonPerPage] = useState(100);
  const [sidebarWidth, setSidebarWidth] = useState("50px"); // Estado para armazenar a largura da barra lateral
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    const fetchPokemonData = async (userInput) => {
      setLoading(true);
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

      setLoading(false);
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

  return (
    <>
      <ProfileSideBar setSidebarWidth={setSidebarWidth} />
      <div className="page-container" style={{ marginLeft: sidebarWidth }}>
        <PokedexSearchBar onSubmit={handleUserInputChange} />
        <Pagination
          postsPerPage={pokemonPerPage}
          totalPosts={pokemonPages.length}
          paginate={paginate}
        />
        <PokedexSearchResult pokemonList={currentPokemon} loading={loading} />
      </div>
    </>
  );
}
