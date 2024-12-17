import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Rasklady from './pages/Rasklady';
import Cards from './pages/Cards';
import Layout from './components/Layout';

function App() {
  return (
    <>
      <BrowserRouter basename="/tarot-cards">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="rasklady" element={<Rasklady />} />
            <Route path="cards" element={<Cards />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
