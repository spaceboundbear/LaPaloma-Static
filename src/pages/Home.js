import React from 'react';
import { Row } from 'react-bootstrap';
import InfoCards from '../components/cards/InfoCards';
import Jumbotron from '../components/Jumbotron';
import Listings from '../data/Listings';
import Form from '../components/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <div>
      <Jumbotron />
      <Row className="mx-auto">
        {Listings.map((listing) => (
          <InfoCards
            key={listing.id}
            id={listing.id}
            name={listing.name}
            address={listing.address}
            image={listing.image}
          />
        ))}
      </Row>
      <Form />
    </div>
  );
};

export default Home;
