import React from 'react';
import Farm from '../assets/background/farm-bg.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const styles = {
  background: {
    backgroundImage: `url(${Farm})`,
    backgroundRepeat: 'no-repeat fixed',
    width: 'auto',
    height: '361px',
    backgroundSize: 'cover',
  },
};

const Jumbotron = () => {
  return (
    <div>
      <div style={styles.background}>
        <div className="ml-5">
          <h1 className="pt-5 pl-5">TEXAS LAND SALES</h1>
          <h2>Contact us today to visit</h2>
          <h2>one of our developments</h2>
          <button>(210) 900-5992</button>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
