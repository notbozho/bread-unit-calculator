import React, { useState } from 'react';
import './App.css';
import GramsByBU from './pages/calculators/GramsByBU';
import Header from './components/NavBar';
import Homepage from './pages/Homepage';
import GramsByCarbs from './pages/calculators/GramsByCarbs';
import CarbsAndBUByGrams from './pages/calculators/CarbsAndBUByGrams';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />
  },
  {
    path: '/grams-by-bu',
    element: <GramsByBU />
  },
  {
    path: '/grams-by-carbs',
    element: <GramsByCarbs />
  },
  {
    path: '/carbs-and-bu-by-grams',
    element: <CarbsAndBUByGrams />
  }
]);

function App() {

  return (
    <div className="App">
      <Header />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
