import React, { useState } from "react";
import { GoSidebarExpand, GoSidebarCollapse } from "react-icons/go";
import { CgProfile, CgPokemon } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";

import "./ProfileSideBar.css";

export function ProfileSideBar({ setSidebarWidth, userName }) {
  const [openSideBar, setOpenSideBar] = useState(false);

  const handleToggleSidebar = () => {
    setOpenSideBar(!openSideBar);
  };

  const getSidebarWidth = () => {
    return openSideBar ? "300px" : "50px";
  };

  // Atualiza a largura da barra lateral no componente pai (PokedexSearchPage)
  setSidebarWidth(getSidebarWidth());

  return (
    <div className="profile-side-bar" style={{ width: getSidebarWidth() }}>
      <button className="expand-tab" onClick={handleToggleSidebar}>
        {openSideBar ? <GoSidebarCollapse /> : <GoSidebarExpand />}
      </button>
      <div className="profile-tab">
        <CgProfile />
        {openSideBar && <label>{userName}</label>}
      </div>
      <div className="pokedex-tab">
        <FaSearch />
        {openSideBar && <label>Pokedex</label>}
      </div>
      <div className="my-pokemon-tab">
        <CgPokemon />
        {openSideBar && <label>My Pokemon</label>}
      </div>
    </div>
  );
}
