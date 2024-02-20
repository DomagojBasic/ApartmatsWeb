import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';

import Apartmani from './pages/Apartmani';
import Galerija from './pages/Galerija';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apartmani" element={<Apartmani />} />
          <Route path="/galerija" element={<Galerija />} />
          {/* Add more routes here if needed */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <div>
      <Hero />
    </div>
  );
}

export default App;
