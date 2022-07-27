import React from 'react';
import styled from 'styled-components';

const Footer = () => (
  <>
    <Heading>
      <a target="_blank" rel="noreferrer" href="https://github.com/kavinu2010/radio-active.git">Check out the code on GitHub</a>
    </Heading>
  </>
);

const Heading = styled.h3`
display:inherit;
flex-direction: column;
position:sticky;
margin-top: auto;
margin-bottom: 1rem;
font-size: 1rem;
gap: 0.3rem;

a{
  color: grey;
}
a:hover{
  color: white;
  transition: 0.3s;
}

@media (min-width:768px){
  font-size: 1.3rem;
}
`;
export default Footer;
