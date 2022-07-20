import './App.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import FavoritesLists from './components/FavoritesList';
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
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={(
              <Body>
                <Filter countries={countries} setFilter={setFilter} />
                <ResultsList filter={filter} />
              </Body>
            )} />
          <Route
            path="/favorites"
            element={(
              <Body>
                <FavoritesLists />
              </Body>
            )} />
        </Routes>
      </BrowserRouter>
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
