import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Nav role="navigation">
      <MenuToggle onClick={toggleMenu}>
        <Icon showMenu={showMenu} />
      </MenuToggle>
      <Menu showMenu={showMenu}>
        <Link className="MenuLink" to="/" onClick={toggleMenu}>Home</Link>
        <Link className="MenuLink" to="/about" onClick={toggleMenu}>About</Link>
        <Link className="MenuLink" to="/favorites" onClick={toggleMenu}>Favorites</Link>
      </Menu>
    </Nav>
  );
};

const Nav = styled.nav`
  grid-column-start: 1;
  grid-column-end: 3;
  justify-self: start;
  align-self: center;
`;

const MenuToggle = styled.section`
  height: 3rem;
  padding: 1.35rem .5rem;
  margin-left: .3rem;
  cursor: pointer;
  z-index: 100;
  margin-top: .5rem;
  border-radius: .5rem;

  &:hover{
    background-color: #fdf6ed22;
  }
  `;

const Icon = styled.span`
  background-color:#2dc847; 
  width: 2.2rem;
  height: 0.28rem;
  border-radius: 3px;
  display: block;
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
  z-index: -100;
  display: ${props => (props.showMenu ? 'flex' : 'none')};
  border-radius: .3rem;
  padding: 1.4rem 3.5rem;
  width: 90%;
  text-align: center;
  position: fixed;
  top: 2rem;
  background-color: #2dc84755;

  @media (min-width: 768px){
    margin-top: 1.1rem;
  }

  .MenuLink{
    color: black;
    font-size: 1rem;
    width: 50%;
    text-decoration: none;
    font-weight: 800;

    &:hover{
      color: #fdf6ed;
      font-weight: 600;
    }

    @media (min-width: 768px){
      font-size: 1.5rem;
      padding: .3rem 1rem;
    }
  }
`;

export default Navbar;
