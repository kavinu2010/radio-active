import React from 'react';
import { Link } from 'react-router-dom';
// import styled from 'styled-components';
import './navbar.css';
// import DehazeIcon from '@mui/icons-material/Dehaze';
// import HomeIcon from '@mui/icons-material/Home';
// import GroupsIcon from '@mui/icons-material/Groups';

// const actions = [
//   { icon: <LogoutIcon />, name: 'Log out' },
//   { icon: <LoginIcon />, name: 'Log in' },
//   { icon: <GroupsIcon />, name: 'About Us' },
//   { icon: <HomeIcon />, name: 'Home' },
// ];

const Navbar = () => (
  <nav role="navigation">
    <div id="menuToggle">
      <input type="checkbox" />
      <span />
      <span />
      <span />
      <ul id="menu">
        {/* <li>Home</li> */}
        <Link to="/">Home</Link>
        {/* <li>About</li> */}
        <Link to="/about">About</Link>
        {/* <li>Favorites</li> */}
        <Link to="/favorites">Favorites</Link>
      </ul>
    </div>
  </nav>

);

export default Navbar;
