import React from 'react';
import Navbar from './Navbar';
import Login from './Login';

const Header = () => {
  console.log('hello linter');
  return (
    <div className="Header">
      <Navbar className="navbar" />
      <h1>RadioActive</h1>
      <Login />
    </div>
  );
};

export default Header;
