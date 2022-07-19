import React from 'react';
import styled from 'styled-components';
import LoginIcon from '@mui/icons-material/Login';
// import LogoutIcon from '@mui/icons-material/Logout';

const Login = () => (
  <Wrapper>
    <LoginIcon color="" fontSize="large" />
    Login
  </Wrapper>
);

const Wrapper = styled.section`
display: inherit;
flex-direction: column;
`;
export default Login;

// elements needed :
// anchor tag sign up ,email, password, anchor tag forgot your pass,ok btn
