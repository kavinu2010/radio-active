import React from 'react';
import './navbar.css';
// import styled from 'styled-components';
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
        <li>Home</li>
        <li>About</li>
        <li>Favorites</li>
      </ul>
    </div>
  </nav>

);

// const Box = styled.ul`
// background-color:lightblue;
// `;

export default Navbar;
