import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    button: {
      fontFamily: 'helveticaStdBold',
      height: '40px',
      width: '200px',
      fontSize: '20px',
      backgroundColor: '#C7911B',
      borderStyle: 'none',
    },
    name: {
      fontFamily: 'helveticaStdBold',
      color: '#803308',
      fontSize: 'calc(20px + 0.7vw)',
    },
    address: {
      fontFamily: 'helveticaStdObl',
      fontSize: 'calc(15px + 0.5vw)',
      lineHeight: '20px',
      color: '#803308',
    },
  };

  return (
    <div className="col-md-6 m-4 mx-auto">
      <div style={styles.card} className="card img-fluid mx-auto">
        <img
          style={styles.photo}
          className="card-img-top"
          src={props.image}
          alt="background"
        />
        <div className="card-img-overlay">
          <h4 style={styles.name} className="card-title px-3 pt-3">
            {props.name}
          </h4>
          <p style={styles.address} className="card-text px-3">
            {props.address}
          </p>
          <div className="px-3">
            <button
              href="#"
              style={styles.button}
              className="btn btn-sm btn-primary d-none d-xl-block "
            >
              More Information
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCards;
