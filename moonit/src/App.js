import React from 'react';
import './App.css';
import Nav from './Nav';
import FinalFooter from './FinalFooter';
import Slider from './components/slider/slider';
import Banner from './components/banner/Banner';

function App() {
  return (
    <div>
      <Nav/>
      <Banner/>
      <Slider/>
      <FinalFooter />
    </div>
  );
}

export default App;