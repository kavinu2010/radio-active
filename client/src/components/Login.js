import React from 'react';
import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './auth/LoginButton';
import LogoutButton from './auth/LogoutButton';

const Login = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <Wrapper>
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      {isAuthenticated ? 'Logout' : 'Login'}
    </Wrapper>
  );
};

const Wrapper = styled.section`
display: inherit;
flex-direction: column;
font-size: 10px;
`;
export default Login;

// elements needed :
// anchor tag sign up ,email, password, anchor tag forgot your pass,ok btn
