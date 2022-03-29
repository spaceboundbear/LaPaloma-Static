import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

const InfoCards = (props) => {
  const styles = {
    photo: {
      backgroundImage: `url(${props.image})`,
      backgroundRepeat: 'no-repeat',
      height: 'auto',
      width: '100%',
    },
    card: {
      maxWidth: '666px',
      borderStyle: 'none',
      backgroundColor: 'transparent',
    },
  };

  return (
    <div className="col-md-6 m-3 mx-auto ">
      <div style={styles.card} className="card img-fluid  mx-auto">
        <img style={styles.photo} className="card-img-top" src={props.image} />
        <div className="card-img-overlay">
          <h4 className="card-title">{props.name}</h4>
          <p className="card-text">{props.address}</p>
          <button href="#" className="btn btn-info">
            More Information
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfoCards;
