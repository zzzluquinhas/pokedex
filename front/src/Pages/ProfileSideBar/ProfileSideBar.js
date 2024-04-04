import './ProfileSideBar.css'
import { useState } from "react"

import { GoSidebarExpand } from "react-icons/go";
import { GoSidebarCollapse } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { FaUserEdit } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { CgPokemon } from "react-icons/cg";
import { AiOutlineTeam } from "react-icons/ai";


export function ProfileSideBar(){
    const [openSideBar, setOpenSideBar] = useState(false);
    if(!openSideBar){
        return(
            <div className="profile-side-bar">
                <button className="expand-tab" onClick={() => setOpenSideBar(true)}>
                    <GoSidebarExpand /> </button>
                <div className="profile-tab"> <CgProfile /> </div>
                <div className="edit-data-tab"> <FaUserEdit /> </div>
                <div className="pokedex-tab"> <FaSearch /> </div>
                <div className="my-pokemon-tab"> <CgPokemon /> </div>
                <div className="my-teams-tab"> <AiOutlineTeam /> </div>
            </div>
        )
    }else{
        return(
            <div className="profile-side-bar" id="expand">
                <button className="expand-tab" button onClick={() => setOpenSideBar(false)}>
                    <GoSidebarCollapse  /> COLLAPSE</button>
                <div className="profile-tab"> <CgProfile /> PROFILE DATA</div>
                <div className="edit-data-tab"> <FaUserEdit /> EDIT PROFILE DATA</div>
                <div className="pokedex-tab"> <FaSearch /> POKEDEX SEARCH</div>
                <div className="my-pokemon-tab"> <CgPokemon /> MY POKEMON</div>
                <div className="my-teams-tab"> <AiOutlineTeam /> MY TEAMS</div>
            </div>
        )
    }
    
}