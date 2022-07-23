import React from 'react';
import './App.css';
import Header from './Header';
import SearchForm from './SearchForm';
import MainTemp from './MainTemp';
import Forecast from './Forecast';
import Footer from './Footer';
function App() {
  return (
    <div className='App'>
      <h1>There is no bad weather when your soul smiles!</h1>
      <Header />
      <SearchForm />
      <MainTemp />
      <h2 class='forecast-header'>Weather forecast for the coming days</h2>
      <Forecast />

      <Footer />
    </div>
  );
}

export default App;
