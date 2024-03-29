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
      const filtered = countries.filter(country => country.match(regex));
      setSearchCountries(filtered);
    } else if (!findCountry) {
      setSearchCountries(countries);
    }
  }, [findCountry, countries, setSearchCountries]);

  const hideList = () => {
    setTimeout(() => {
      setActiveSearch(false);
    }, 1000);
  };

  const showList = event => {
    event.target.select();
    setActiveSearch(true);
  };

  return (
    <FilterBox>
      <label htmlFor="countries">
        Filter by Country
      </label>
      <Searchfield
        type="text"
        autoComplete="off"
        onFocus={showList}
        onBlur={hideList}
        value={findCountry}
        onChange={changeHandler}
        placeholder="country"
        id="countries" />

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
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  width: 90%;
  align-items: center;

  label{
    color: #2dc847;
    font-size: 1.2rem;
    font-weight: bold;
    width: 60%;
  }
  @media (min-width: 768px){
    font-size: 1.4rem;
  }
`;

const Searchfield = styled.input`
  width: 80%;
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 0.25rem;
  margin-top: 0.5rem;
  border: none;
  outline: none;
  background-color: #fdf6ed;
  @media (min-width: 768px){
    font-size: 1.2rem;
    width: 60%;
  }
`;

const FilterList = styled.ul`
  width: 80%;
  height: 9.5rem;
  opacity: ${props => (props.active ? '100%' : '0')};
  overflow-y: scroll;
  z-index: ${props => (props.active ? '1' : '-1')};
  border-radius: 3px;

  button{
    background-color: #fdf6ed;
    font-size: 1rem;
    border: none;
    padding: .3rem;
    width:100%;
    cursor: pointer;

    &:hover{
      background-color: #2dc847;
    }
  }
  @media (min-width: 768px){
    font-size: 1.2rem;
    width: 60%;

    button{
      font-size: 1.2rem;
    }
  }
`;

export default Filter;
