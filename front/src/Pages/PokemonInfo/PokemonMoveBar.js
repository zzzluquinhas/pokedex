import './PokemonMoveBar.css'
import React, { useState, useEffect } from 'react';

export function PokemonMoveBar(props){
    const [moveName, setMoveName] = useState([]);
    const [moveType, setMoveType] = useState([]);
    const [moveClass, setMoveClass] = useState([]);
    const [movePP, setMovePP] = useState([]);
    const [movePower, setMovePower] = useState([]);
    
    useEffect(() => {
        const fetchMoveData = async () => {
            const response = await fetch(`${props.moveUrl}`);
            const data = await response.json();
            function formatMoveName(name) {
                // Split the string by dashes
                const words = name.split('-');
            
                // Capitalize the first letter of each word
                const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
            
                // Join the words back together with a space
                const formattedName = capitalizedWords.join(' ');
            
                return formattedName;
            }
            setMoveName(formatMoveName(data.name));
            setMoveType(data.type.name);
            setMoveClass(data.damage_class.name);
            setMovePP(data.pp);
            setMovePower(data.power);

        };

        fetchMoveData();
    }, []);
    return (
        <div className='pokemon-move-bar-wrapper' id={`${moveType}`}>
            <div className='move-main-info'>
                <div className='move-name'>
                    {moveName}
                </div>
                <div className='move-type'>
                    {moveType}
                </div>
                <div className='move-effect'>
                    {moveClass}
                </div>
            </div>
            <div className='move-power-info'>
                <div className='move-power'>Power: {movePower || " - "}</div>
                <div className='move-pp'>PP: {movePP}</div>
            </div>
        </div>
    )
}