import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, browserHistory } from 'react-router-dom';
import App from './App';
import './assets/styles/style.css';

ReactDOM.render(
  <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
