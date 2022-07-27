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
      {isAuthenticated ? <p className="logoutText">Logout</p> : <p className="loginText">Login</p>}
    </Wrapper>
  );
};

const Wrapper = styled.section`
grid-column-start: 3;
grid-column-end: 3;
justify-self: end;
align-self: center;
margin-right: .8rem;
border-radius: .5rem;
padding: 0 .3rem;
font-size: .8rem;
font-weight: bold;

&:hover{
  background-color: #fdf6ed22;
}

.loginText{
  margin-top: -.4rem;
  color: #2dc847;
}

.logoutText{
  margin-top: -.4rem;
  color: #8a847a;
}

@media (min-width: 768px){
  font-size: 1.1rem;
  margin-top: 1rem;
 }
`;

export default Login;
