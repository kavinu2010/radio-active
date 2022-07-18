import React from 'react';
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material';

const Navbar = () => (
  <SpeedDial icon={<SpeedDialIcon />}>
    <SpeedDialAction>Home</SpeedDialAction>
    <SpeedDialAction>About us</SpeedDialAction>
    <SpeedDialAction>Favorites if you are logged in</SpeedDialAction>
  </SpeedDial>
);

export default Navbar;
