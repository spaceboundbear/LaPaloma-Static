import React from 'react';
import { Nav, Navbar, Image, Container, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import LogoWhite from '../assets/logo/logo-white.png';
import { GrFacebook } from 'react-icons/gr';
import { BsFillTelephoneFill } from 'react-icons/bs';

const styles = {
  nav: {
    backgroundColor: '#001641',
    textAlign: 'center',
    fontFamily: 'helveticaStdRoman',
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
};

const Footer = () => {
  return (
    <Navbar style={styles.nav} variant="dark" className="mx-md-auto">
      <Container>
        <Navbar.Brand className="d-none d-lg-block" to="/">
          <Image src={LogoWhite} style={{ height: '50px' }} />
        </Navbar.Brand>
        <Nav
          style={styles.underline}
          className="flex-wrap justify-content-center"
        >
          <span style={styles.text} className="navbar-text d-none d-sm-block">
            For More Information
          </span>

          <NavLink
            style={styles.phone}
            className="nav-link"
            to="/SenderoCrossing"
          >
            <BsFillTelephoneFill style={styles.icon} /> (210) 900-5992
          </NavLink>
          <NavLink
            style={styles.link}
            className="nav-link px-3"
            to="/SchuettigRd"
          >
            <GrFacebook style={styles.icon} /> @lydiasellsland
          </NavLink>

          <NavLink
            style={styles.link}
            className="nav-link px-3"
            to="/BriteOaks"
          >
            Broker #9001432
          </NavLink>
          <NavLink
            style={styles.link}
            className="nav-link px-3"
            to="/SummitOrchards"
          >
            License #595743
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Footer;
