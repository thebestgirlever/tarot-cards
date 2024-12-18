import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Rasklady from './pages/Rasklady';
import Information from './pages/Information';
import Layout from './components/Layout';
import PageRasklad from './pages/PageRasklad';

function App() {
  return (
    <>
      <BrowserRouter basename="/tarot-cards">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="rasklady" element={<Rasklady />} />
            <Route path="rasklad/:link" element={<PageRasklad />} />
            <Route path="informaciya=po=karte" element={<Information />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
