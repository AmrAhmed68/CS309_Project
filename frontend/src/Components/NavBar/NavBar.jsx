import React, { useState } from "react";

import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  

  return (
    <nav>
      <Link to="/" className="title">
        <img src="https://th.bing.com/th/id/R.2b5285cb635abd3338abd2eedb556695?rik=pTtGie4hhDVvCw&pid=ImgRaw&r=0" alt="" />
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      
      <ul className={menuOpen ? "open" : ""}> 
        
        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        <li className="dropdown">
          <NavLink to="/about">Brands <span> &rsaquo; </span> </NavLink>
          <ul>
            <li> <NavLink to="/about">Lenovo</NavLink></li>
            <li> <NavLink to="/about">HP</NavLink> </li>
            <li> <NavLink to="/about">Dell</NavLink></li>
            <li> <NavLink to="/about">Apple</NavLink></li>
          </ul>
        </li>

        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>

        <li>
            <NavLink to="/Login"> LogIn </NavLink>
        </li>

      </ul>
    </nav>
  );
};
