import React from 'react';
import { NavLink } from 'react-router-dom';
import { GoHome } from 'react-icons/go';
import { BiSearchAlt } from 'react-icons/bi';
import '../styles/Navbar.css';

const Navbar = () => (
  <nav>
    <NavLink exact className="navbar__link" to="/">
      <GoHome />
    </NavLink>
    <span>Cook Addict</span>
    <button type="button">
      <BiSearchAlt />
    </button>
  </nav>
);

export default Navbar;
