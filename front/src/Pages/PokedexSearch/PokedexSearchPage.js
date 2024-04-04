import {PokedexSearchResult} from "./PokedexSearchResult"
import { ProfileSideBar } from "../ProfileSideBar/ProfileSideBar"
import { PokedexSearchBar } from "./PokedexSearchBar"
import React, { useState, useEffect } from 'react';
export function PokedexSearchPage(){
    const [allPokemon, setAllPokemon] = useState([]);

    useEffect(() => {
        const fetchPokemonData = async () => {
            const response = await fetch(`https://pokeapi.co/api/v2/pokedex/kanto`);
            const data = await response.json();
            setAllPokemon(data.pokemon_entries);
        };

        fetchPokemonData();
    }, []);

    return(
        <>
            <PokedexSearchBar></PokedexSearchBar>
            <PokedexSearchResult pokemonList={allPokemon}>
            </PokedexSearchResult>
            <ProfileSideBar></ProfileSideBar>
        </>
    )
}