import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import LogoutIcon from '@mui/icons-material/Logout';

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <LogoutIcon
      sx={{ fontSize: 40, cursor: 'pointer', color: '#8a847a' }}
      onClick={() => logout({ returnTo: window.location.origin })} />
  );
};

export default LogoutButton;
