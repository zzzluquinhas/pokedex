import { PokedexSearchItem } from "./PokedexSearchItem"
import { useState } from "react"
import { PokemonInfoPage } from "../PokemonInfo/PokemonInfoPage";


export function PokedexSearchResult(){
    const [openInfo, setOpenInfo] = useState(false);
    return(
        <>
        <PokedexSearchItem ></PokedexSearchItem>
        <button onClick={() => setOpenInfo(true)}>Abrir modal</button>
        <PokemonInfoPage isOpen={openInfo} setInfoOpen={() => setOpenInfo(!openInfo)}></PokemonInfoPage>
        </>
    )
}