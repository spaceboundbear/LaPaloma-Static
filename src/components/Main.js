import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Sendero from '../pages/Sendero';

const Main = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/LaPaloma-Static/" element={<Home />}></Route>
      <Route exact path="/Home" element={<Home />}></Route>
      <Route exact path="/SenderoCrossing" element={<Sendero />}></Route>
    </Routes>
  );
};

export default Main;
