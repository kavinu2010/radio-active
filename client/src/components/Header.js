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
  z-index: 100;
  text-align: center;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  margin-top: 2rem;
`;

const Title = styled.h1`
 grid-column-start: 1;
 grid-column-end: 4;
 grid-row-start: 2;
 justify-self: center;
 font-family: 'Rubik Glitch', cursive;
 font-size: 2.9rem;
 font-weight: 200;

 @media (min-width: 768px){
  font-size: 5rem;
 }
`;
export default Header;
