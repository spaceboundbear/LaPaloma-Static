import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BriteOaks from '../pages/BriteOaks';
import Home from '../pages/Home';
import Schuettig from '../pages/Schuettig';
import Sendero from '../pages/Sendero';
import Summit from '../pages/Summit';

const Main = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/LaPaloma-Static/" element={<Home />}></Route>
      <Route exact path="/Home" element={<Home />}></Route>
      <Route exact path="/SenderoCrossing" element={<Sendero />}></Route>
      <Route exact path="/SchuettigRd" element={<Schuettig />}></Route>
      <Route exact path="/BriteOaks" element={<BriteOaks />}></Route>
      <Route exact path="/SummitOrchards" element={<Summit />}></Route>
    </Routes>
  );
};

export default Main;
