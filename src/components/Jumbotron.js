import React from 'react';
import Farm from '../assets/background/farm-bg.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import '../assets/styles/style.css';

const styles = {
  background: {
    backgroundImage: `url(${Farm})`,
    backgroundRepeat: 'no-repeat',
    width: 'auto',
    height: '100%',
    backgroundSize: 'cover',
  },

  font: {
    fontFamily: 'barley',
    fontSize: 'calc(38px + 1.6vw)',
    color: '#803308',
    paddingTop: '35px',
  },

  fontHeader: {
    fontFamily: 'Helvetica',
    fontSize: 'calc(28px + 1vw)',
    lineHeight: 'calc(25px + 0.65vw)',
    color: '#803308',
  },

  button: {
    fontFamily: 'Helvetica',
    width: 'auto',
    paddingBottom: '6px',
    fontSize: 'calc(15px + 1vw)',
    backgroundColor: '#C7911B',
    borderColor: '#803308',
    borderRadius: '0px',
    borderWidth: '2px',
  },
};

const Jumbotron = () => {
  return (
    <div>
      <div style={styles.background}>
        <Container>
          <div className="ml-5 pb-5">
            <h1 style={styles.font}>TEXAS LAND SALES</h1>
            <h2 style={styles.fontHeader}>Contact us today to visit</h2>
            <h2 style={styles.fontHeader}>one of our developments</h2>
            <div className="mt-4">
              <a
                href="tel:2109005992"
                style={styles.button}
                className="btn btn-primary"
              >
                (210) 900-5992
              </a>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Jumbotron;
