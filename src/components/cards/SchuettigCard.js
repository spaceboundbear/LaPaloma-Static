import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Row, Col, Container } from 'react-bootstrap';

const styles = {
  logo: {
    maxWidth: '360px',
  },
  map: {
    width: '70%',
    height: 'auto',
  },
  plat: {
    width: '100%',
  },
  card: {
    borderStyle: 'none',
  },
  lotHeader: {
    fontFamily: 'HelveticaStdBold',
    color: 'red',
  },
  info: {
    fontFamily: 'HelveticaStdRoman',
    fontSize: '19px',
  },
  tracts: {
    fontFamily: 'HelveticaStdBold',
    color: '#803308',
    marginTop: '20px',
  },
  buildTime: {
    fontFamily: 'HelveticaStdRoman',
    fontSize: '22px',
  },
  button: {
    fontFamily: 'helveticaStdBold',
    height: '40px',
    display: 'inline-block',
    fontSize: '18px',
    backgroundColor: '#C7911B',
    borderStyle: 'none',
    paddingTop: '9px',
  },
  header: {
    fontFamily: 'HelveticaStdBold',
    color: '#803308',
    fontSize: '50px',
  },
  quote: {
    fontFamily: 'HelveticaStdObl',
  },
};

const SchuettigCard = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <Row>
        <Col xs={12} md={12} lg={6} className="mt-5">
          <Card style={styles.card}>
            <h1 style={styles.header} className="mx-auto">
              Schuettig Rd
            </h1>

            <h3 style={styles.lotHeader} className="mx-auto pt-4">
              {props.lotHeader}
            </h3>
            <p style={styles.info} className="mx-auto">
              {props.info}
            </p>
            <Row>
              <Col>
                <p style={styles.info} className="mx-auto">
                  {props.infoTwo}
                </p>
                <p style={styles.quote} className="mx-auto">
                  {props.quote}
                </p>
              </Col>
              <Col sm={12} md={6}>
                <img
                  className="mx-auto"
                  style={styles.plat}
                  src={props.plat}
                  alt="plat"
                />
              </Col>
            </Row>
          </Card>
        </Col>
        <Col xs={12} md={12} lg={6} className="mt-5">
          <Card style={styles.card} className="mx-auto">
            <a
              href={props.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center"
            >
              <img
                className="mx-auto"
                style={styles.map}
                src={props.map}
                alt="map"
              />
            </a>

            <Container>
              <Row className="pt-3">
                <Col className="text-center">
                  <a
                    href={props.recorded}
                    download="sendero-plat"
                    style={styles.button}
                    className="btn btn-primary mt-1 mx-2"
                  >
                    Recorded Plat
                  </a>

                  <a
                    href={props.restrictions}
                    download="sendero-restrictions"
                    style={styles.button}
                    className="btn btn-primary mt-1 me-2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Recorded Restrictions
                  </a>
                </Col>
              </Row>
            </Container>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default SchuettigCard;
