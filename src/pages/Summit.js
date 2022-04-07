import React from 'react';
import { Container, Row } from 'react-bootstrap';
import SummitCard from '../components/cards/SummitCard';
import Jumbotron from '../components/Jumbotron';
import SummitData from '../data/SummitData';
import 'bootstrap/dist/css/bootstrap.min.css';
import SummitPhotoCards from '../components/cards/SummitPhotoCards';
import FrequentlyAsked from '../components/FrequentlyAsked';

const Summit = () => {
  return (
    <div>
      <Jumbotron />
      <Container>
        <Row className="mx-auto">
          {SummitData.map((location) => (
            <SummitCard
              key={location.id}
              id={location.id}
              map={location.map}
              plat={location.plat}
              logo={location.logo}
              info={location.info}
              infoTwo={location.infoTwo}
              infoThree={location.infoThree}
              infoFour={location.infoFour}
              infoFive={location.infoFive}
              finance={location.finance}
              quote={location.quote}
              link={location.link}
            />
          ))}
        </Row>
        <Row>
          <SummitPhotoCards />
        </Row>
      </Container>
      <FrequentlyAsked />
    </div>
  );
};

export default Summit;
