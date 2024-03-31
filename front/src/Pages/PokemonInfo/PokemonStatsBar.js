import './PokemonStatsBar.css'

export function PokemonStatsBar(props){
    const contentBarSize = {
        width: `${(props.statsValue / 255) * 100}%`
    };
    return(
        <div className="stats-bar-wrapper">
            <div className="value-wrapper">
                <div className="stats-name">{props.statsName}: </div>
                <div className="stats-value">{props.statsValue}</div>
            </div>
            <div className="value-bar-wrapper">
                <div className="full-bar">
                    <div style={contentBarSize} className="content-bar"></div>
                </div>
            </div>
        </div>
    );
}