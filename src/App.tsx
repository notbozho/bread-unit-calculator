import React, { useState } from 'react';
import './App.css';
import BreadCalculator from './BreadCalculator';
import Header from './components/Header';


function App() {

  return (
    <div className="App">
      <Header />
      <BreadCalculator />
    </div>
  );
}

export default App;
