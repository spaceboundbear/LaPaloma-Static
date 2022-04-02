import React from 'react';
import { Container, Row } from 'react-bootstrap';
import LocationCards from '../components/cards/LocationCards';
import SenderoPhotos from '../data/PhotoData';
import Jumbotron from '../components/Jumbotron';
import LocationData from '../data/LocationData';
import 'bootstrap/dist/css/bootstrap.min.css';
import PhotoCards from '../components/cards/PhotoCards';
import FrequentlyAsked from '../components/FrequentlyAsked';

const Sendero = () => {
  return (
    <div>
      <Jumbotron />
      <Container>
        <Row className="mx-auto">
          {LocationData.map((location) => (
            <LocationCards
              key={location.id}
              id={location.id}
              logo={location.logo}
              map={location.map}
              plat={location.plat}
              lotHeader={location.lotHeader}
              info={location.info}
              infoTwo={location.infoTwo}
              tracts={location.tracts}
              buildTime={location.buildTime}
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

export default Sendero;
