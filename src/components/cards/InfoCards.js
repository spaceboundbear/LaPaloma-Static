import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const InfoCards = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

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
      width: 'auto',
      fontSize: 'calc(8px + 0.8vw)',
      backgroundColor: '#C7911B',
      borderStyle: 'none',
      paddingBottom: '0px',
    },
    buttonMobile: {
      fontFamily: 'helveticaStdBold',
      width: 'auto',
      fontSize: 'calc(8px + 0.8vw)',
      backgroundColor: '#C7911B',
      borderStyle: 'none',
      marginTop: '-22px',
      paddingBottom: '0px',
    },
    name: {
      fontFamily: 'helveticaStdBold',
      color: '#803308',
      fontSize: 'calc(15px + 0.8vw)',
      paddingLeft: 'calc(8px + 0.8vw)',
      paddingTop: '10px',
    },
    address: {
      fontFamily: 'helveticaStdObl',
      fontSize: 'calc(13px + 0.5vw)',
      lineHeight: 'calc(8px + 0.2vw)',
      color: '#803308',
      paddingLeft: 'calc(8px + 0.8vw)',
    },
    buttonDiv: {
      paddingLeft: 'calc(8px + 0.8vw)',
      marginTop: 'calc(-5px + 0.8vw)',
    },
    link: {
      textDecoration: 'none',
    },
  };

  return (
    <div className="col-lg-6 m-4 mx-auto">
      <Link to={`${props.link}`}>
        <div style={styles.card} className="card img-fluid mx-auto">
          <Link to={`${props.link}`}>
            <img
              style={styles.photo}
              className="card-img-top"
              src={props.image}
              alt="background"
            />
          </Link>
          <div className="card-img-overlay">
            <h4 style={styles.name} className="card-title  ">
              {props.name}
            </h4>
            <p style={styles.address} className="card-text ">
              {props.address}
            </p>
            <div>
              <Link style={styles.link} to={`${props.link}`}>
                <div
                  style={styles.buttonDiv}
                  className="button-div d-block d-sm-none"
                >
                  <button
                    style={styles.buttonMobile}
                    className="btn btn-sm btn-primary"
                  >
                    More Information
                  </button>
                </div>
                <div
                  style={styles.buttonDiv}
                  className="button-div d-none d-sm-block"
                >
                  <button
                    style={styles.button}
                    className="btn btn-sm btn-primary"
                  >
                    More Information
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default InfoCards;
