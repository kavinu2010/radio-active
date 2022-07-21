/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const Filter = ({ countries, setFilter }) => {
  const changeHandler = event => {
    setFilter({ country: event.target.value });
  };

  return (
    <Section>
      {/* <label for="countries">Filter by Country</label> */}
      <h3>Filter by Country</h3>
      <CountryFilter onChange={changeHandler} name="countries" id="countries">
        <option value="allCountries" key="allCountries">All Countries</option>
        {countries.map(country => (
          <option value={country} key={country}>{country}</option>
        ))}
      </CountryFilter>
    </Section>
  );
};

const Section = styled.section`
display: flex;
width: 100%;
justify-content: space-between;
align-items: center;
`;
const CountryFilter = styled.select`
  width: 50%;
  font-size: 1rem;
  padding: 5px;
  border-radius: 0.25rem;
option {
  width: 50%;
  background-color: blue;
}
`;

export default Filter;
