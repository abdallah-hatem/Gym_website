import React from 'react';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Features from './components/Features/Features';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Offer from './components/Offer/Offer';


function App() {

  return (
    <>
      <Navbar />
      <Home />
      <Features />
      <Offer />
      <About />
      <Contact />
    </>
    
  );
}

export default App;
