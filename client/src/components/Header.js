import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import Login from './Login';

const Header = () => (
  <Wrapper>
    <Navbar />
    <Title>RadioActive</Title>
    <Login />
  </Wrapper>
);

const Wrapper = styled.section`
  display: flex;
  margin-top: 2rem;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

const Title = styled.h1`
 font-family: 'Rubik Glitch', cursive;
 font-size: 2.9rem;
 font-weight: 200;

 @media (min-width: 768px){
  font-size: 5rem;
 }
`;
export default Header;
