import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GoSidebarExpand, GoSidebarCollapse } from "react-icons/go";
import { CgProfile, CgPokemon } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import exitIcon from "../../assets/icons/close-icon.svg"

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
      <div className="main-side-bar-content">
        <button className="expand-tab" onClick={handleToggleSidebar}>
          {openSideBar ? <GoSidebarCollapse /> : <GoSidebarExpand />}
        </button>
        <div className="profile-tab">
          <CgProfile />
          {openSideBar && <label>{userName}</label>}
        </div>
        <Link to="/pokedex" className="pokedex-tab">
          <FaSearch />
          {openSideBar && <label>Pokedex</label>}
        </Link>
        <Link to="/pokemon" className="my-pokemon-tab">
          <CgPokemon />
          {openSideBar && <label>My Pokemon</label>}
        </Link>
      </div>
      <div className="low-side-bar">
        <Link to="/" className="exit-tab">
          <img src={exitIcon}></img>
          {openSideBar && <label>Exit</label>}
        </Link>
      </div>
    </div>
  );
}
