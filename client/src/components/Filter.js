/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Filter = ({ countries, setFilter }) => {
  const [findCountry, setFindCountry] = useState('');
  const [searchCountries, setSearchCountries] = useState([]);
  const [activeSearch, setActiveSearch] = useState(false);

  const changeHandler = event => {
    setFindCountry(event.target.value);
  };

  const handleSubmit = event => {
    setFilter({ country: event.target.value });
    setFindCountry(event.target.value);
  };

  useEffect(() => {
    if (countries.length > 0 && findCountry) {
      const regex = new RegExp(findCountry, 'gi');
      const filtered = countries.filter(country => country.toLowerCase().match(regex));
      setSearchCountries(filtered);
    } else if (!findCountry) {
      setSearchCountries(countries);
    }
  }, [findCountry, countries, setSearchCountries]);

  const hideList = () => {
    setTimeout(() => {
      setActiveSearch(false);
    }, 5);
  };

  const showList = () => {
    // event.target.select();
    setActiveSearch(true);
  };

  return (
    <FilterBox>
      <label>
        Filter by Country
        <Searchfield
          type="text"
          autoComplete="off"
          onFocus={showList}
          onBlur={hideList}
          value={findCountry}
          onChange={changeHandler}
          placeholder="country"
          id="countries" />
      </label>
      <FilterList active={activeSearch}>
        {searchCountries
          .map(country => (
            <button type="submit" value={country} key={country} onClick={handleSubmit}>
              {country}
            </button>
          ))}
      </FilterList>
    </FilterBox>
  );
};

const FilterBox = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;

  label{
    font-size: 1.2rem;
    font-weight: bold;
    width: 100%;
  }
`;

const Searchfield = styled.input`
  width: 60%;
  font-size: 1rem;
  padding: 5px;
  border-radius: 0.25rem;
  margin-top: 0.5rem;
`;

const FilterList = styled.ul`
  width: 60%;
  height: ${props => (props.active ? '8rem' : '0')};
  overflow-y: scroll;

  button{
    background-color: rgba(0,0,0, 0.3);
    font-size: 1rem;
    border: none;
    padding: .3rem;
    width:100%;

    &:hover{
      background-color: rgba(0,0,0, 0.5);
    }
  }
  
`;

export default Filter;
