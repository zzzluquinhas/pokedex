import './PokedexSearchBar.css'
import React, { useState } from 'react';

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
                 MY ICON HERE
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