import './App.css';
import React, { useState } from 'react'; // useEffect
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import FavoritesLists from './components/FavoritesList';
import Header from './components/Header';
import Filter from './components/Filter';
import ResultsList from './components/ResultsList';
import Footer from './components/Footer';
import countries from './data/countries.json';

function App() {
  const [filter, setFilter] = useState({});

  return (
    <section className="App">
      <BrowserRouter>
        <Header />
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
          {/* Add about route */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </section>
  );
}

const Body = styled.section`
  border: .5px dotted fuchsia;
  width: 90%;
  margin-top: 1rem; 
`;

export default App;
