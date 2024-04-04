import React, { useState } from "react";
import { GoSidebarExpand, GoSidebarCollapse } from "react-icons/go";
import { CgProfile, CgPokemon } from "react-icons/cg";
import { FaUserEdit, FaSearch } from "react-icons/fa";
import { AiOutlineTeam } from "react-icons/ai";

import "./ProfileSideBar.css";

export function ProfileSideBar({ setSidebarWidth }) {
  const [openSideBar, setOpenSideBar] = useState(false);

  const handleToggleSidebar = () => {
    setOpenSideBar(!openSideBar);
  };

  // Função para obter a largura atual da barra lateral
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
      </div>
      <div className="edit-data-tab">
        <FaUserEdit />
      </div>
      <div className="pokedex-tab">
        <FaSearch />
      </div>
      <div className="my-pokemon-tab">
        <CgPokemon />
      </div>
      <div className="my-teams-tab">
        <AiOutlineTeam />
      </div>
    </div>
  );
}
