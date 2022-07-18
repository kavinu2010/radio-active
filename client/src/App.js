import './App.css';
import React from 'react';
import Header from './components/Header';
import Filter from './components/Filter';
import ResultsList from './components/ResultsList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Filter />
      <ResultsList />
      <Footer />
    </div>
  );
}

export default App;
