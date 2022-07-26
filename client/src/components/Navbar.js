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
  z-index: 1;
  position: relative;
  background-color: black;  width: 3rem;
  width: 2.2rem;
  height: 0.28rem;
  border-radius: 3px;
  display: inline-block;
  transition: all 0.3s;
  transform: ${props => (props.showMenu ? 'rotate(45deg)' : 'rotate(0)')};

  &::before,
  &::after {
    content: "";
    background-color: black;
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

const Menu = styled.ul`
  display: ${props => (props.showMenu ? 'flex' : 'none')};
  flex-direction: column;
  padding: 1rem;
  width: 97%;
  text-align: center;
  position: fixed;
  top: 6.1rem;
  background: white;

  @media (min-width: 768px){
    width: 90%;
    top: 8rem;
    margin-left: 1rem;
    flex-direction: row;
  }

  @media (min-width: 1024px){
    margin-left: -.7rem;
  }

  @media (min-width: 1600px){
    margin-left: -5rem;
  }

  .MenuLink{
    color: black;
    padding: .5rem 0;
    font-size: 1rem;
    width: 50%;
    align-self: center;
    text-decoration: none;

    &:hover{
      color: green;
      font-weight: 500;
    }

    @media (min-width: 768px){
      font-size: 1.5rem;
    }
  }
`;

export default Navbar;
