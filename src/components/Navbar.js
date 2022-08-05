import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { GoHome } from 'react-icons/go';
import { BiSearchAlt } from 'react-icons/bi';
import { GiCook } from 'react-icons/gi';
import { IoIosArrowBack } from 'react-icons/io';
import Filter from './Filter';
import '../styles/Navbar.css';

const popover = (
  <Popover id="popover-basic" className="filter-popover">
    <Popover.Header as="h4">Find recipes</Popover.Header>
    <Popover.Body>
      <Filter />
    </Popover.Body>
  </Popover>
);

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const goBack = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <nav>
      <div>
        { location.pathname !== '/'
          && (
          <button type="button" onClick={(e) => goBack(e)}>
            <IoIosArrowBack />
          </button>
          )}
        <NavLink exact className="navbar__link" to="/">
          <GoHome />
        </NavLink>
      </div>
      <span>Cook Addict</span>
      <div>
        <NavLink exact className="navbar__link" to="/recipes/all">
          <GiCook />
        </NavLink>
        <OverlayTrigger trigger="click" placement="bottom" overlay={popover} rootClose>
          <button type="button">
            <BiSearchAlt />
          </button>
        </OverlayTrigger>
      </div>
    </nav>
  );
};

export default Navbar;
