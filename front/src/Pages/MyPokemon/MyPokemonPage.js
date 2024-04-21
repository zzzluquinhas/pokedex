import './MyPokemonPage.css'
import React, { useState, useEffect } from 'react';
import { PokemonIcon } from './PokemonIcon';

export function MyPokemonPage(props){
    return(
        <div className='my-pokemon-container'>
            <div className='my-pokemon-title'>
                <PokemonIcon pokemonNumber="767" pokemonName="AAAA"></PokemonIcon>
            </div>
        </div>
    )
}