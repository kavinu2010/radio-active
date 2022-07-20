/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const Filter = ({ countries, setFilter }) => {
  const changeHandler = event => {
    setFilter({ country: event.target.value });
  };

  return (
    <section>
      {/* <label for="countries">Filter by Country</label> */}
      Filter by Country
      <CountryFilter onChange={changeHandler} name="countries" id="countries" size="10">
        <option value="allCountries" key="allCountries">All Countries</option>
        {countries.map(country => (
          <option value={country} key={country}>{country}</option>
        ))}
      </CountryFilter>
    </section>
  );
};

const CountryFilter = styled.select`
width: 50%;
/* font-family: 'Rubik Glitch', cursive; */
select{
  font-size:1rem;
  overflow: hidden;
}
`;

export default Filter;
