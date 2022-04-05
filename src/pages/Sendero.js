import React from 'react';
import { Container, Row } from 'react-bootstrap';
import SenderoCard from '../components/cards/SenderoCard';
import SenderoPhotos from '../data/PhotoData';
import Jumbotron from '../components/Jumbotron';
import SenderoData from '../data/SenderoData';
import 'bootstrap/dist/css/bootstrap.min.css';
import PhotoCards from '../components/cards/PhotoCards';
import FrequentlyAsked from '../components/FrequentlyAsked';

const Sendero = () => {
  return (
    <div>
      <Jumbotron />
      <Container>
        <Row className="mx-auto">
          {SenderoData.map((location) => (
            <SenderoCard
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
              link={location.link}
              recorded={location.recorded}
              restrictions={location.restrictions}
            />
          ))}
        </Row>
        <Row>
          {SenderoPhotos.map((photos) => (
            <PhotoCards key={photos.id} id={photos.id} photo={photos.photo} />
          ))}
        </Row>
      </Container>
      <div
        class="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalCenterTitle">
                Modal title
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">...</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <FrequentlyAsked />
    </div>
  );
};

export default Sendero;
