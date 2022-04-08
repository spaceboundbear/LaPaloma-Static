import React from 'react';
import Farm from '../assets/background/farm-bg.png';
import FarmMobile from '../assets/background/farm-mobile.webp';
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

  bgMobile: {
    backgroundImage: `url(${FarmMobile})`,
    backgroundRepeat: 'no-repeat',
    width: 'auto',
    height: '200px',
    backgroundSize: 'cover',
  },

  font: {
    fontFamily: 'barley',
    fontSize: 'calc(38px + 1.6vw)',
    color: '#803308',
    paddingTop: '35px',
  },

  fontMobileOne: {
    fontFamily: 'barley',
    fontSize: 'calc(30px + 1.6vw)',
    color: '#803308',
    paddingTop: '10px',
  },

  fontMobile: {
    fontFamily: 'barley',
    fontSize: 'calc(30px + 1.6vw)',
    color: '#803308',
    marginTop: '-17px',
  },

  fontHeader: {
    fontFamily: 'Helvetica',
    fontSize: 'calc(28px + 1vw)',
    lineHeight: 'calc(25px + 0.65vw)',
    color: '#803308',
  },

  fontHeaderMobile: {
    fontFamily: 'Helvetica',
    fontSize: 'calc(20px + 1vw)',
    color: '#803308',
    lineHeight: '18px',
  },

  button: {
    fontFamily: 'Helvetica',
    width: 'auto',
    fontSize: 'calc(15px + 1vw)',
    backgroundColor: '#C7911B',
    borderColor: '#803308',
    borderRadius: '0px',
    borderWidth: '2px',
    paddingBottom: '0px',
  },

  buttonMobile: {
    fontFamily: 'Helvetica',
    width: 'auto',
    fontSize: 'calc(10px + 1vw)',
    backgroundColor: '#C7911B',
    borderColor: '#803308',
    borderRadius: '0px',
    borderWidth: '2px',
    paddingBottom: '0px',
    marginTop: '-20px',
  },
};

const Jumbotron = () => {
  return (
    <div>
      <div style={styles.bgMobile} className="d-block d-sm-none">
        <Container>
          <div className="ml-5">
            <h1 style={styles.fontMobileOne}>TEXAS</h1>
            <h1 style={styles.fontMobile}>LAND SALES</h1>
            <h2 style={styles.fontHeaderMobile}>Contact us today to visit</h2>
            <h2 style={styles.fontHeaderMobile}>one of our developments</h2>
            <div className="mt-4">
              <a
                href="tel:2109005992"
                style={styles.buttonMobile}
                className="btn btn-primary"
              >
                (210) 900-5992
              </a>
            </div>
          </div>
        </Container>
      </div>
      <div style={styles.background} className="d-none d-sm-block">
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
