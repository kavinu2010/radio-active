import './App.css';
import React, { useState } from 'react'; // useEffect
import { Routes, Route, BrowserRouter } from 'react-router-dom';
// import styled from 'styled-components';
import FavoritesLists from './components/FavoritesList';
import Header from './components/Header';
import Filter from './components/Filter';
import ResultsList from './components/ResultsList';
import About from './components/About';
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
              <>
                <Filter countries={countries} setFilter={setFilter} />
                <ResultsList filter={filter} />
              </>
            )} />
          <Route
            path="/favorites"
            element={(
              <FavoritesLists />
            )} />
          <Route
            path="/about"
            element={(
              <About />
            )} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </section>
  );
}

export default App;
