import React from 'react';
import styled from 'styled-components';

const About = () => {
  <section>
    <header> We are Solutionauts </header>
    <p>
      ABOUT US:
      We joined Salt April 2022, after being selected among approx 1500 candidates. We have been MOB programming for 3 months now and this site is the result of our Final Project as a team. We are: Navid Mani Asl, Gabriele Orlandi, Catherine Östlund, Kavitha Sujatha. Among us there is a Materials Engineer, a Math teacher, a Business Development Consultant and a mother of tree launching her career in IT. 
    </p>
    <p>
      PROJECT CONCEPT:
      The Project MVP aimed at providing filtered access to World Radio Stations via the radio-browser-api.
    </p>
    <p>
      TECH STACK:
      The UI is build with REACT, Styled Components, CSS, Material UI. The SERVER uses NODE.js and EXPRESS. The DataBase is MongoDB which delivers a CRUD, offering users the ability to save their favorite Radio Stations if/when Logged-In. These favorited radio stations are then displayed in a private favorites list. For users that don't want to Register to the site, we provide a Filtering tool, accessing a tailored list of Radio Station by country. 
    </p>
  </section>;
};

const header = styled.h2`
position:relative;
bottom: 1rem;
`;
export default About;
