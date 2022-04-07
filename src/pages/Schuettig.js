import React from 'react';
import { Container, Row } from 'react-bootstrap';
import SchuettigCard from '../components/cards/SchuettigCard';
import SchuettigPhotoCards from '../components/cards/SchuettigPhotoCards';
import Jumbotron from '../components/Jumbotron';
import SchuettigData from '../data/SchuettigData';
import 'bootstrap/dist/css/bootstrap.min.css';
import FrequentlyAsked from '../components/FrequentlyAsked';

const Schuettig = () => {
  return (
    <div>
      <Jumbotron />
      <Container>
        <Row className="mx-auto">
          {SchuettigData.map((location) => (
            <SchuettigCard
              key={location.id}
              id={location.id}
              map={location.map}
              plat={location.plat}
              lotHeader={location.lotHeader}
              info={location.info}
              infoTwo={location.infoTwo}
              quote={location.quote}
              link={location.link}
              restrictions={location.restrictions}
              recorded={location.recorded}
            />
          ))}
        </Row>
        <Row>
          <SchuettigPhotoCards />
        </Row>
      </Container>

      <FrequentlyAsked />
    </div>
  );
};

export default Schuettig;
