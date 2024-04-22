import { LoginPage } from "./Pages/Login/LoginPage";
import { MyPokemonPage } from "./Pages/MyPokemon/MyPokemonPage";
import { PokedexSearchPage } from "./Pages/PokedexSearch/PokedexSearchPage";
import { Routes, Route, Navigate } from 'react-router-dom';
import { useState } from "react";

export default function App() {
  const [user, setUser] = useState("");

  const handleLogin = (loggedInUser) => {
    setUser(loggedInUser);
  };

  // Se o usuário estiver autenticado, redirecione para /pokedex
  const authenticatedRoutes = (
    <Routes>
      <Route path="/" element={<Navigate to="/pokedex" />} />
      <Route path="/pokedex" element={<PokedexSearchPage user={user} />} />
      <Route path="/pokemon" element={<MyPokemonPage user={user} />} />
    </Routes>
  );

  // Se o usuário não estiver autenticado, exiba a página de login
  const unauthenticatedRoutes = (
    <Routes>
      <Route path="/" element={<LoginPage onLogin={handleLogin} />} />
    </Routes>
  );

  return user ? authenticatedRoutes : unauthenticatedRoutes;
}
