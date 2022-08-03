import React from 'react';
import { NavLink } from 'react-router-dom';
import { GoHome } from 'react-icons/go';
import { BiSearchAlt } from 'react-icons/bi';
import { GiCook } from 'react-icons/gi';
import '../styles/Navbar.css';

const Navbar = () => (
  <nav>
    <NavLink exact className="navbar__link" to="/">
      <GoHome />
    </NavLink>
    <span>Cook Addict</span>
    <div>
      <NavLink exact className="navbar__link" to="/recipes/all">
        <GiCook />
      </NavLink>
      <button type="button">
        <BiSearchAlt />
      </button>
    </div>
  </nav>
);

export default Navbar;
