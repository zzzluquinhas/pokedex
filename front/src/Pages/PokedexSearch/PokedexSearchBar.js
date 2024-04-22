import './PokedexSearchBar.css'
import React, { useState } from 'react';
import textIcon from "../../assets/icons/logo_name.png"
import myIcon from "../../assets/icons/logo.png"

export function PokedexSearchBar({ onSubmit }) {
    const [searchInput, setSearchInput] = useState('');

    const handleInputChange = (event) => {
        setSearchInput(event.target.value);
    };

    const handleSubmit = () => {
        onSubmit(searchInput.toLowerCase().replace(" ", "-"));
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSubmit();
        }
    };
    return(
        <div className='pokedex-search-bar'>
            <div className="poqueerdex-icon">
                <div className='icon'>
                    <img src={myIcon} className='poqueerdex-img'></img>
                    <img src={textIcon} className='poqueerdex-text'></img>
                </div>
            </div>
            <div className="search-bar">
                <input
                    className="search-pokemon"
                    value={searchInput}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    placeholder='Filter by number or name'
                />
                <button className="submit-search" onClick={handleSubmit}>SEARCH</button>
            </div>
        </div>
    )
}