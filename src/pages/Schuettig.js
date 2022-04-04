import React from 'react';
import { Container, Row } from 'react-bootstrap';
import SchuettigCard from '../components/cards/SchuettigCard';
import SenderoPhotos from '../data/PhotoData';
import Jumbotron from '../components/Jumbotron';
import SchuettigData from '../data/SchuettigData';
import 'bootstrap/dist/css/bootstrap.min.css';
import PhotoCards from '../components/cards/PhotoCards';
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
            />
          ))}
        </Row>
        <Row>
          {SenderoPhotos.map((photos) => (
            <PhotoCards key={photos.id} id={photos.id} photo={photos.photo} />
          ))}
        </Row>
      </Container>
      <FrequentlyAsked />
    </div>
  );
};

export default Schuettig;
