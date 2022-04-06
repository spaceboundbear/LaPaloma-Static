import React from 'react';
import { Nav, Navbar, Image, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import LogoWhite from '../assets/logo/logo-white.png';
import { GrFacebook } from 'react-icons/gr';
import { BsFillTelephoneFill } from 'react-icons/bs';

const styles = {
  nav: {
    backgroundColor: '#001641',
    textAlign: 'center',
    fontFamily: 'helveticaStdRoman',
    height: '120px',
  },
  link: {
    color: 'white',
  },
  phone: {
    color: 'white',
  },
  icon: {
    color: '#C7911B',
    marginBottom: '3px',
  },
  underline: {
    borderBottom: '2px solid #C7911B',
  },
  text: {
    color: 'white',
    paddingRight: '30px',
  },
  anchor: { color: 'inherit' },
};

const Footer = () => {
  return (
    <Navbar style={styles.nav} variant="dark" className="mx-md-auto">
      <Container>
        <Navbar.Brand className="d-none d-lg-block" to="/">
          <Image src={LogoWhite} style={{ height: '70px' }} />
        </Navbar.Brand>
        <Nav
          style={styles.underline}
          className="flex-wrap justify-content-center"
        >
          <span style={styles.text} className="navbar-text d-none d-sm-block">
            For More Information
          </span>

          <a style={styles.phone} className="nav-link" href="tel:2109005992">
            <BsFillTelephoneFill style={styles.icon} /> (210) 900-5992
          </a>

          <a
            style={styles.link}
            className="nav-link px-3"
            href="https://www.facebook.com/lydiasellsland"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GrFacebook style={styles.icon} /> @lydiasellsland
          </a>

          <span style={styles.link} className="nav-link px-3">
            License #595743
          </span>
          <span style={styles.link} className="nav-link px-3">
            Broker #9001432
          </span>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Footer;
