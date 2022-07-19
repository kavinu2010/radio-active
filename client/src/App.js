import './App.css';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Filter from './components/Filter';
import ResultsList from './components/ResultsList';
import Footer from './components/Footer';

const COUNTRY_URI = 'http://91.132.145.114/json/countries';

function App() {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState({});

  useEffect(() => {
    fetch(COUNTRY_URI)
      .then(data => data.json())
      .then(data => {
        const countryList = data.map(country => country.name);
        setCountries(countryList);
      });
  }, []);

  return (
    <section className="App">
      <Header />
      <Body>
        <Filter countries={countries} setFilter={setFilter} />
        <ResultsList filter={filter} />
      </Body>
      <Footer />
    </section>
  );
}

const Body = styled.section`
  border: .5px dotted fuchsia;
  width: 90%;
  margin-top: 1rem; 
`;

export default App;
