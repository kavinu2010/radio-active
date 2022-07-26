/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';

const About = () => (
  <Wrapper>
    <Heading> ABOUT US </Heading>
    <p>
      We joined Salt April 2022, after being selected among approx 1500 candidates. We have been MOB programming for 3 months now and this site is the result of our two-week Final Project as a team. We are: Navid Mani Asl, Gabriele Orlandi, Catherine Östlund, Kavitha Sujatha. Among us there is a Materials Engineer, a Math Teacher, a Business Development Consultant and Dental Assistant and we are all excited about our new career in IT.
    </p>
    <h4>PROJECT CONCEPT</h4>
    <p>
      The Project MVP aimed at providing filtered access to World Radio Stations via the radio-browser-api.
    </p>
    <h4>TECH STACK</h4>
    <p>
      The UI is build with REACT, Styled Components, CSS, Material UI. The SERVER uses NODE.js and EXPRESS.The DataBase is MongoDB which delivers a CRUD, offering users the ability to save their favorite Radio Stations if/when Logged-In. These favorited radio stations are then displayed in a private favorites list. For users that dont want to register to the site, we provide a filtering tool, accessing a tailored list of radio stations by country.
    </p>
  </Wrapper>
);

const Heading = styled.h2`
  margin: 1rem 0;
  font-size: 1.5rem;
`;

const Wrapper = styled.section`
  width: 90%; 
  margin-top: 2rem;
  background-color: rgba(255,255,255, 0.2);
  border-radius: 0.3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  margin-bottom: 2rem;

  p{
    margin-bottom: 1rem;
    text-align: justify;
    padding: 0 1rem;
  }

  @media (min-width: 768px){
    width: 60%;
    max-width: 650px;
    font-size: 1.2rem;
  }
`;

export default About;
