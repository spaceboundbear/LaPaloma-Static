import React from 'react';
import { Container, Row } from 'react-bootstrap';
import BriteOaksCard from '../components/cards/BriteOaksCard';
import Jumbotron from '../components/Jumbotron';
import BriteOaksData from '../data/BriteOaksData';
import 'bootstrap/dist/css/bootstrap.min.css';
import FrequentlyAsked from '../components/FrequentlyAsked';
import BritePhotosCard from '../components/cards/BritePhotoCards';

const BriteOaks = () => {
  return (
    <div>
      <Jumbotron />
      <Container>
        <Row className="mx-auto">
          {BriteOaksData.map((location) => (
            <BriteOaksCard
              key={location.id}
              id={location.id}
              map={location.map}
              plat={location.plat}
              logo={location.logo}
              info={location.info}
              infoTwo={location.infoTwo}
              infoThree={location.infoThree}
              quote={location.quote}
              link={location.link}
              recorded={location.recorded}
              restrictions={location.restrictions}
            />
          ))}
        </Row>
        <Row>
          <BritePhotosCard />
        </Row>
      </Container>
      <FrequentlyAsked />
    </div>
  );
};

export default BriteOaks;
