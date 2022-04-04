import React from 'react';
import { Container, Row } from 'react-bootstrap';
import BriteOaksCard from '../components/cards/BriteOaksCard';
import SenderoPhotos from '../data/PhotoData';
import Jumbotron from '../components/Jumbotron';
import BriteOaksData from '../data/BriteOaksData';
import 'bootstrap/dist/css/bootstrap.min.css';
import PhotoCards from '../components/cards/PhotoCards';
import FrequentlyAsked from '../components/FrequentlyAsked';

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

export default BriteOaks;
