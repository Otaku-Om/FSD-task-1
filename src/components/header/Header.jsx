import React from 'react';
import "./header.css";
import { FaHome } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { GiFairyWand } from "react-icons/gi";

function Header() {
  return (
    <nav className='header section__padding'>
      <div className="left">
         <h1 className="logo">Logo</h1>
         <div/>
         <ul className="list-items">
            <div className="list-item active">
               <FaHome />
               <li>Explore</li>
            </div>
            <div className="list-item">
               <FaPen />
               <li>Create</li>
            </div>
            <div className="list-item">
               <GiFairyWand />
               <li>Edit</li>
            </div>
         </ul>
      </div>
      <div className="right">
         <input type="button" value="Login" className='btn' />
      </div>

    </nav>
  )
}

export default Header
