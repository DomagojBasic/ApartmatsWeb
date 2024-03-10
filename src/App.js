import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Destinations from './components/oNama/Destinations';
import Onama_home from './components/oNama/Onama_home';
import Slider from './pages/Slider';
import Galerija from './pages/Galerija';
import Footer from './components/footer/Footer';
import HomeSection  from './components/home_section/HomeSection';
import Benefits from './components/benefit/benefit';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apartmani" element={<Slider />} />
          <Route path="/galerija" element={<Galerija />} />
          <Route path="/oNama" element={<Onama />} />
          
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
      <HomeSection />
      <Benefits />
      <Slider />
      
    </div>
  );
}

function Onama() {
  return (
    <div>
      <Onama_home />
      <Destinations />
      <Footer />
      
    </div>
  );
}

export default App;
