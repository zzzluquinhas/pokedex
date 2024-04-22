import { LoginPage } from "./Pages/Login/LoginPage";
import { MyPokemonPage } from "./Pages/MyPokemon/MyPokemonPage";
import { PokedexSearchPage } from "./Pages/PokedexSearch/PokedexSearchPage";
import { Routes, Route } from 'react-router-dom';

export default function App(){
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/pokedex" element={<PokedexSearchPage />} />
      <Route path="/pokemon" element={<MyPokemonPage />} />
    </Routes>
  );
}
