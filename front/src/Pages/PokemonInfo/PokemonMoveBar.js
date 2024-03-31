import './PokemonMoveBar.css'

export function PokemonMoveBar(props){
    return (
        <div className='pokemon-move-bar-wrapper'>
            <div className='move-main-info'>
                <div className='move-name'>
                    {props.moveName}
                </div>
                <div className='move-type'>
                    {props.moveType}
                </div>
                <div className='move-effect'>
                    {props.moveEffect}
                </div>
            </div>
            <div className='move-pp'>PP: {props.movePP}</div>
        </div>
    )
}