import './PokemonInfoPage.css'
import { PokemonStats } from './PokemonStats'
import { PokemonMoves } from './PokemonMoves'
import { PokemonAbilities } from './PokemonAbilities'
import { PokemonProfile } from './PokemonProfile'
import React, { useState, useEffect } from 'react';


export function PokemonInfoPage({isOpen, setInfoOpen}){
    if(isOpen){
        
        return(
        <>
            <div className='pokemon-info-page-modal'>
                <div className="pokemon-info-page-wrapper">
                    <div className="pokemon-info-page-components">
                        <div className="pokemon-info-page-left-side">
                            <PokemonProfile></PokemonProfile>
                            <PokemonAbilities></PokemonAbilities>
                        </div>
                        <div className="pokemon-info-page-right-side">
                            <div className="pokemon-info-page-close">
                                <button className="close-btn" onClick={setInfoOpen}></button>   
                            </div>
                            <div className="pokemon-info-page-right-components">
                                <PokemonStats></PokemonStats>
                                <PokemonMoves></PokemonMoves>
                            </div>
                        </div>
                    </div>
                    <div className="pokemon-info-page-add">
                        <button className="pokemon-add-btn">ADD TO YOUR POKEMON LIST</button>
                    </div>
                </div>
            </div>
        </>
    )}

    return null;
}