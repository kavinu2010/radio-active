import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import DehazeIcon from '@mui/icons-material/Dehaze';
// import HomeIcon from '@mui/icons-material/Home';
// import GroupsIcon from '@mui/icons-material/Groups';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav role="navigation">
      <MenuToggle onClick={toggleMenu}>
        <Icon showMenu={showMenu} />
      </MenuToggle>
      <Menu showMenu={showMenu}>
        <Link className="MenuLink" to="/" onClick={toggleMenu}>Home</Link>
        <Link className="MenuLink" to="/about" onClick={toggleMenu}>About</Link>
        <Link className="MenuLink" to="/favorites" onClick={toggleMenu}>Favorites</Link>
      </Menu>
    </nav>
  );
};

const MenuToggle = styled.section`
  height: 3rem;
  padding: .5rem;
  cursor: pointer;
  z-index: 100;
  `;

const Icon = styled.span`
  z-index: 50;
  position: relative;
  background-color: #2dc847;  
  width: 2.2rem;
  height: 0.28rem;
  border-radius: 3px;
  display: inline-block;
  transition: all 0.3s;
  transform: ${props => (props.showMenu ? 'rotate(45deg)' : 'rotate(0)')};

  &::before,
  &::after {
    content: "";
    background-color: #2dc847;
    width: 2.2rem;
    height: 0.28rem;
    border-radius: 3px;
    display: inline-block;
    position: absolute;
    left: 0;
    transition: all 0.5s;
  }
  &::before {
    top: ${props => (props.showMenu ? '0' : '-0.8rem')};
    transform: ${props => (props.showMenu ? 'rotate(-90deg)' : 'rotate(0)')};
  }
  &::after {
    top: ${props => (props.showMenu ? '0' : '0.8rem')};
    transform: ${props => (props.showMenu ? 'rotate(-90deg)' : 'rotate(0)')};
  }

  @media (min-width: 768px){
    width: 2.6rem;
    height: 0.4rem;

    &::before,
    &::after {
      width: 2.6rem;
      height: 0.4rem;
  }
  }
`;

const Menu = styled.section`
  z-index: 50;
  display: ${props => (props.showMenu ? 'flex' : 'none')};
  border-radius: .3rem;
  flex-direction: row;
  padding: 1rem;
  width: 90%;
  // margin: .2rem 7%;
  text-align: center;
  position: fixed;
  left: 2.5%;
  top: 7rem;
  background: #2dc847;

  @media (min-width: 768px){
    width: 80%;
    top: 9rem;
    left: 11%;
    flex-direction: row;
  }

  .MenuLink{
    color: black;
    padding: .5rem 0;
    font-size: 1rem;
    width: 50%;
    align-self: center;
    text-decoration: none;
    font-weight: 800;

    &:hover{
      color: #fdf6ed;
      font-weight: 600;
    }

    @media (min-width: 768px){
      font-size: 1.5rem;
    }
  }
`;

export default Navbar;
