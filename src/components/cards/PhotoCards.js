import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import 'bs5-lightbox';

const styles = {
  photo: {
    maxWidth: '320px',
    maxHeight: '200px',
    height: 'auto',
    width: '100%',
    borderWidth: '2px',
    borderColor: '#C7911B',
    borderStyle: 'solid',
    margin: 'auto',
    objectFit: 'cover',
  },
  card: {
    borderColor: 'transparent',
  },
};

const PhotoCards = (props) => {
  return (
    <Card style={styles.card} className="col-sm-12 col-md-6 col-lg-3 mt-4">
      <a href={props.photo} target="_blank" rel="noopener noreferrer">
        <img style={styles.photo} src={props.photo} alt="lots" />
      </a>
    </Card>
  );
};

export default PhotoCards;
